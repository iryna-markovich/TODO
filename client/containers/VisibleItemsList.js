import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router";
import List from "../components/List";
import { getVisibleItems } from "../reducers";
import { fetchItems } from "../api";

class VisibleItemsList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const {filter, receiveItems} = this.props;
    fetchItems(filter).then(items => 
      receiveItems(filter, items));
  }

  render() {
    const {toggleItem, ...rest} = this.props;
    return <List {...rest} onClick={toggleItem} />;
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { filter }
    }
  }
) => {
  return {
    items: getVisibleItems(state, filter || "all_tasks"),
    filter
  };
};

VisibleItemsList = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(VisibleItemsList)
);

export default VisibleItemsList;
