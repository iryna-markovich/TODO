import React, { Component } from "react";
import "./../styles/index.css";
import Controls from "./Controls";
import Field from "./Field";
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount = () => {
    console.log("Will Mount");
    fetch("api/items")
      .then(response => response.json())
      .then(items => {
        this.setState({data:items.items});
        console.log(this.state.data);
      });
  };
*/
  render() {
    return (
      <div className="container">
        <h1 className="container__title">It's a simple TODOList</h1>
        <hr className="container__line" />
        <Controls />
        <Field />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
