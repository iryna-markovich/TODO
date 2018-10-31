const express = require("express"),
  bodyParser = require("body-parser"),
  fs = require("file-system"),
  dataFile = "items.json",
  app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.put("/api/items/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, "utf8")),
   
    newTask = req.body;

  const oldTask = data.find(item => {
    return item.id === newTask.id;
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
