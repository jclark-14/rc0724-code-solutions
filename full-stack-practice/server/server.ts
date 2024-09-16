import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { type Product } from '../client/src/lib/types';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
    `;
    const result = await db.query<Product[]>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/product/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId))
      throw new ClientError(400, 'productId must be a valid integer');
    const sql = `
    select * from "products" where "productId" = $1
    `;
    const params = [productId];
    const results = await db.query<Product>(sql, params);
    const product = results.rows[0];
    if (!product) throw new ClientError(404, 'product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
