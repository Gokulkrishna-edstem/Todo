import React from "react";
import { Link } from "react-router-dom";

function App() {
  // function handleGetAllTodo() {}

  return (
    <div className="w-full h-lvh bg-amber-950 flex justify-center items-center">
      <Link to={`/allTodo`}>
        <button
          // onClick={handleGetAllTodo}
          className="bg-amber-800 rounded-2xl w-[150px]"
        >
          Get All Todos
        </button>
      </Link>
      <Link to={`/addTodo`}>
        <button className="bg-amber-200 rounded-2xl w-[150px] ms-5">
          Add A Todos
        </button>
      </Link>
    </div>
  );
}

export default App;
