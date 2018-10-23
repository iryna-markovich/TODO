import React from "react";
import "./index.css";
import Controls from "./../Controls";
import Display from "./../Display";
import List from "./../List";

const ToDoList = () => (
  <div className="container">
    <h1 className="container__title">It's a simple TODOList</h1>
    <hr className="container__line" />
    <div className="container__content">
      <Controls />
      <Display />
      <List />
    </div>
  </div>
);

export default ToDoList;
