import React from "react";

export default function Product(props) {
  return (
    <div className="benefits-component">
        <div className="benefits-card">
        <img className="benefits--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        </div>
    </div>
  );
}