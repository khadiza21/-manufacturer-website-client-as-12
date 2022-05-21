import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustonLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div className="mx-3 mt-2">
      <Link
        className="fw-bold"
        style={{
          color: match ? "green" : "black",
          textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
};

export default CustonLink;
