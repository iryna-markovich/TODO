import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/index.css";

const FilterLink = ({ filter, children }) => (
  <NavLink
    className="container__btn container__btn_regular"
    to={filter === "all_tasks" ? "/" : `/${filter}`}
    activeStyle={{
      opacity: "1",
      filter: "hue-rotate(235deg)"
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
