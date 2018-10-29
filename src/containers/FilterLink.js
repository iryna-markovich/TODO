import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/index.css";

const FilterLink = ({ filter, children }) => (
  <NavLink
    className="container__btn container__btn_regular"
    to={filter === "all_tasks" ? "/all_tasks" : `/${filter}`}
  >
    {children}
  </NavLink>
);

export default FilterLink;
