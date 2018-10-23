import React from "react";
import "./index.css";
import Button from "./../Button";
//import Filter from "../../actions";

const Controls = () => (
  <div className="container__controls">
    <Button>Show All</Button>
    <Button>Show Completed</Button>
    <Button>Show Active</Button>
    <Button>Delete All</Button>
  </div>
);

export default Controls;

/*
    <Button filter={Filter.SHOW_ALL}>Show All</Button>
    <Button filter={Filter.SHOW_COMPLITED}>Show Completed</Button>
    <Button filter={Filter.SHOW_ACTIVE}>Show Active</Button>
    <Button filter={Filter.DELETE_ALL}>Delete All</Button>
*/
