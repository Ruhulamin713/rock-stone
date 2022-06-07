import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="text-center my-4">
      <h2>Welcome to the Service detail:{serviceId}</h2>
      <Button onClick={() => navigate("/checkOut")}>Proceed To Checkout</Button>
    </div>
  );
};

export default ServiceDetails;
