import React from "react";

function Card({ id, title, completed }) {
  return (
    <div className="w-[400px] h-[250px] flex flex-col justify-center items-center bg-amber-300 rounded-2xl">
      <h5 className="mb-5">
        id: <span>{id}</span>
      </h5>
      <h1 className="text-2xl text-bold mb-3">
        title <span>{title}</span>
      </h1>
      <p>
        completed <span>{completed}</span>
      </p>
    </div>
  );
}

export default Card;
