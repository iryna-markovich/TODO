import { connect } from "react-redux";
import { toggleItem } from "../actions";
import { withRouter } from "react-router";
import List from "../components/List";
import { getVisibleTodos } from "./../reducers";

const mapStateToProps = (
  state,
  {
    match: {
      params: { filter }
    }
  }
) => ({
  items: getVisibleTodos(state, filter || "all_tasks")
});


const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { toggleItem: toggleItem }
  )(List)
);

export default VisibleTodoList;
