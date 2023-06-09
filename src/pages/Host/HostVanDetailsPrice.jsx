import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetailsPrice = () => {
  const { vanDetails } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${vanDetails.price} <span>/day</span>
    </h3>
  );
};

export default HostVanDetailsPrice;
