import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Breadcrumb = () => {
  const { current } = useSelector((state) => state.product);

  return (
    <div>
      {current.brand ? (
        <>
          <Link to="/">Product list</Link> /{" "}
          <span data-testid="current-product">
            {current.brand} - {current.model}
          </span>
        </>
      ) : (
        <>Product list</>
      )}
    </div>
  );
};
export default Breadcrumb;
