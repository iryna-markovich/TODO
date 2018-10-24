import React from "react";
import Controls from "./Controls";
import Field from "./Field";
import VisibleTodoList from "../containers/VisibleTodoList";
import "./../styles/index.css";
import DeletePostModal from "./DeletePostModal";
import ItemWindow from "./ItemWindow";

const App = () => (
  <div className="container">
    <h1 className="container__title">It's a simple TODOList</h1>
    <hr className="container__line" />
    <Controls />
    <Field />
    <VisibleTodoList />
    <DeletePostModal />
    <ItemWindow />

  </div>
);

export default App;
