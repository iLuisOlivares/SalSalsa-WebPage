import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedPlato({ img, title, description }) {
  return (
    <section className="o-description-container-featured">
      <section className="o-description-container-featured-fix2">
        <img src={img} className="o-img-info-featured" />
        <h5>{title}</h5>
        <h6>{description}</h6>
        <Link className="o-btn-info" to="/carta">
          Comprar
        </Link>
      </section>
    </section>
  );
}
