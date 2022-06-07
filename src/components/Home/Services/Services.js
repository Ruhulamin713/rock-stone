import React from "react";
import Service from "../Service/Service";
import service1 from "../../../images/services/service1.png";
import service2 from "../../../images/services/service2.png";
import service3 from "../../../images/services/service3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: service1,
      name: "Beginner Plan",
      price: 10000,
    },
    {
      id: 2,
      img: service2,
      name: "Intermediate Level Plan",
      price: 15000,
    },
    {
      id: 3,
      img: service3,
      name: "Advance Level",
      price: 20000,
    },
  ];
  return (
    <div className="my-4">
      <h1 id="services" className="text-center">
        Training Services
      </h1>
      <div className="container">
        <div className="row">
          {services.map((service, i) => (
            <Service service={service} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
