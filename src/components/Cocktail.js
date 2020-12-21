import React from "react";
import { Link } from "react-router-dom";
function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <div className="image-container">
        <img src={image} alt={name} className="cocktail-img" />
      </div>
      <div className="cocktail-info">
        <h3>{name}</h3>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="details-btn">
          details
        </Link>
      </div>
    </article>
  );
}

export default Cocktail;
