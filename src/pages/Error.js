import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/" className="back-home-btn">
        Back home
      </Link>
    </div>
  );
}

export default Error;
