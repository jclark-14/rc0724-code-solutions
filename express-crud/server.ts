import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from grades
    `;
    const results = await db.query<Grade>(sql);
    let grades = results.rows;
    if (!grades[0]) {
      grades = [];
    }
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    select * from grades where "gradeId" = $1
    `;
    const params = [gradeId];
    const results = await db.query<Grade>(sql, params);
    const grade = results.rows[0];
    if (!grade) throw new ClientError(404, 'gradeId not found');
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    validateGrade(name, course, score);
    const sql = `
    insert into grades ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [name, course, score];
    const results = await db.query<Grade>(sql, params);
    const grade = results.rows[0];
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    validateGrade(name, course, score);
    const sql = `
    update grades
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const params = [name, course, score, gradeId];
    const results = await db.query<Grade>(sql, params);
    const grade = results.rows[0];
    if (!grade) throw new ClientError(404, 'grade not found');
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
    delete from grades where "gradeId" = $1
    returning *
    `;
    const params = [gradeId];
    const results = await db.query<Grade>(sql, params);
    const grade = results.rows[0];
    if (!grade) throw new ClientError(404, 'grade not found');
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function validateGradeId(gradeId: string): void {
  if (!Number.isInteger(+gradeId))
    throw new ClientError(400, `gradeId not an integer : ${gradeId}`);
}

function validateGrade(name: string, course: string, score: number): void {
  if (!name) throw new ClientError(400, 'name is required');
  if (!course) throw new ClientError(400, 'course is required');
  if (!score) throw new ClientError(400, 'score is required');
  if (!Number.isInteger(score))
    throw new ClientError(400, `score must be an integer: ${score}`);
  if (score < 0 || score > 100)
    throw new ClientError(400, `score must be between 0 and 100: ${score}`);
}
