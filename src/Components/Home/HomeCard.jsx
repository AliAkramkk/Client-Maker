import React from "react";
import Designer from "../assets/D1.png";

const HomeCard = () => {
  return (
    <div className="flex justify-end rounded-lg shadow-xl m-4">
      <img
        src={Designer}
        alt="Your Image"
        className="w-fit h-96 rounded-s-md shadow-lg justify-end p-4"
      />
    </div>
  );
};

export default HomeCard;
