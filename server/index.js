const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("file-system");
const dataFile = "items.json";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});
*/

app.get("/api/items", (req, res) => {
  res.send({ items: JSON.parse(fs.readFileSync(dataFile, "utf8")) });
});

app.post("/api/items", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, "utf8")),
    item = req.body;
  data.push(item);
  fs.writeFileSync(dataFile, JSON.stringify(data));
  res.send({ item: item });
});

app.put("/api/items/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, "utf8")),
    id = req.params.id,
    newTask = req.body;

  const oldTask = data.find(item => {
    return item.id === id;
  });

  for (let key in newTask) {
    oldTask[key] = newTask[key];
  }

  fs.writeFileSync(dataFile, JSON.stringify(data));
  res.sendStatus(204);
});

app.delete("/api/items/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, "utf8")),
    id = req.params.id;

  const updatedData = data.filter(item => {
    return item.id !== id;
  });

  fs.writeFileSync(dataFile, JSON.stringify(updatedData));
  res.sendStatus(204);
});

app.delete("/api/items", (req, res) => {
  fs.writeFileSync(dataFile, JSON.stringify([]));
  res.sendStatus(204);
});

app.listen(3001, () => {
  console.log("Server has been started...");
});
