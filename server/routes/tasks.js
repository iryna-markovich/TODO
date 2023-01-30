import express from 'express';
import fs from 'fs/promises';

const dataFile = './items.json';
const db = JSON.parse(await fs.readFile(dataFile, 'utf8'));

export const app = express();

app.get('/api/items', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db));
});

app.post('/api/items', async (req, res) => {
  const item = req.body;

  await fs.writeFile(dataFile, JSON.stringify([...db, item]));

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(item));
});

app.put('/api/items/:id', async (req, res) => {
  const id = req.params.id;
  const item = req.body;

  const tasks = db.filter((item) => item.id !== id);

  await fs.writeFile(dataFile, JSON.stringify([...tasks, { id, ...item }]));

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, ...item }));
});

app.delete('/api/items/:id', async (req, res) => {
  const id = req.params.id;

  const updatedData = db.filter((item) => item.id !== id);

  await fs.writeFile(dataFile, JSON.stringify(updatedData));

  res.writeHead(204, { 'Content-Type': 'application/json' });
  res.end();
});

app.delete('/api/items', async (req, res) => {
  await fs.writeFile(dataFile, JSON.stringify([]));

  res.writeHead(204, { 'Content-Type': 'application/json' });
  res.end();
});
