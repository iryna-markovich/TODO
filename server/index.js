import express from 'express';
import bodyParser from 'body-parser';
import { app as tasksRouter } from './routes/tasks.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(tasksRouter);

app.listen(3001, () => {
  console.log('Server has been started...');
});
