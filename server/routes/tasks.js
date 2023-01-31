import express from 'express';
import fs from 'fs/promises';
import crypto from 'crypto';

const dataFile = './items.json';
const db = JSON.parse(await fs.readFile(dataFile, 'utf8'));

export const app = express();

app.get('/api/items', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db));
});

app.post('/api/items', async (req, res) => {
  const id = crypto.randomBytes(10).toString('hex');
  const item = req.body;

  await fs.writeFile(dataFile, JSON.stringify([...db, { id, ...item }]));

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, ...item }));
});

app.put('/api/items', async (req, res) => {
  const id = req.body.id;
  const item = req.body;
  
  const tasks = db.filter((item) => item.id !== id);

  await fs.writeFile(dataFile, JSON.stringify([...tasks, { id, ...item }]));

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id, ...item }));
});

app.delete('/api/items', async (req, res) => {
  await fs.writeFile(dataFile, JSON.stringify([]));

  res.writeHead(204, { 'Content-Type': 'application/json' });
  res.end();
});
