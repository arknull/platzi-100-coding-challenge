import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ListMenu = (props) => {
  return (
    <Fragment>
      <li className="content__item-list">
        <Link to={props.route}>{props.title}</Link>
      </li>
    </Fragment>
  );
};

export default ListMenu;
