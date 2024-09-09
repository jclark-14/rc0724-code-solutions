import express from 'express';

const app = express();

// app.use((req, res, next) => {
//   console.log(`method: ${req.method} path: ${req.path}`, new Date());
//   next();
// });
app.get('/notes/123', (req, res) => {
  res.send(`${req.method} ${req.path} ${new Date()}`);
});

app.get('/notes', (req, res) => {
  res.send(`${req.method} ${req.path} ${new Date()}`);
});

app.get('/', (req, res) => {
  res.send(`${req.method} ${req.path} ${new Date()}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
