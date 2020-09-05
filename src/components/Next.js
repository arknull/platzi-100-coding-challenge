import React from "react";
import { Link } from "react-router-dom";

const Next = ({ link }) => {
  return (
    <Link className="next" to={link}>
      >
    </Link>
  );
};

export default Next;
