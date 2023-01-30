import express from 'express';
import bodyParser from 'body-parser';
import fs from 'file-system';

const app = express();
const dataFile = './items.json';
const db = JSON.parse(fs.readFileSync('./items.json', 'utf8'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
  res.send({ items: db });
  res.sendStatus(200);
});

app.post('/api/items', (req, res) => {
  const item = req.body;

  db.push(item);
  // add!! not overwrite
  fs.writeFileSync(dataFile, JSON.stringify(db));

  res.send({ item });
  res.sendStatus(200);
});

app.put('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const item = req.body;

  const task = db.find((item) => item.id === id);

  //change to key:value
  fs.writeFileSync(dataFile, JSON.stringify(db));
  res.sendStatus(204);
});

app.put('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = db.filter((item) => item.id !== id);

  fs.writeFileSync(dataFile, JSON.stringify(updatedData));
  res.sendStatus(204);
});

app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;

  const updatedData = db.filter((item) => item.id !== id);

  fs.writeFileSync(dataFile, JSON.stringify(updatedData));
  res.sendStatus(204);
});

app.delete('/api/items', (req, res) => {
  fs.writeFileSync(dataFile, JSON.stringify([]));
  res.sendStatus(204);
});

app.listen(3001, () => {
  console.log('Server has been started...');
});
