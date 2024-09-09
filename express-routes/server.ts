import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path, new Date());
  next();
});
app.post('/notes/123', (req, res) => {
  res.send('notes/123 post endpoint');
});

app.get('/notes', (req, res) => {
  res.send('get /notes');
});

app.get('/', (req, res) => {
  res.send('get /');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
