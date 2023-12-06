import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="font-extrabold text-2xl">{location.state.data.title}</h1>
        <h4>{location.state.data.description}</h4>
        <img
          src={location.state.data.urlToImage}
          alt={location.state.data.title}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Details;
