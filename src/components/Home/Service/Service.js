import { Button } from "react-bootstrap";
import React from "react";

import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const { id, img, name, price } = props.service;

  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div
      className=" card col-sm-12 col-md-6 col-lg-4"
      //   style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price={price}/month</p>
        <Button onClick={() => showDetails(id)}>See Details</Button>
      </div>
    </div>
  );
};

export default Service;
