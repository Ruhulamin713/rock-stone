import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark w-100 text-white p-5 mt-4">
      <p>&copy; All Right Reserved {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
