import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("false");

  async function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      title,
      completed: completed === "true",
      userId: 1,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      console.log("added data: ", response);
      Swal.fire({
        title: "Success!",
        text: "Todo added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTitle("");
      setCompleted("false");
    } catch (err) {
      console.log("Failed adding the response", err);
      Swal.fire({
        title: "Error!",
        text: "Failed to add todo.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="min-h-screen bg-amber-950 flex items-center justify-center px-4">
      <div className="bg-amber-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Todo</h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block mb-1 text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter todo title"
              className="w-full px-4 py-2 rounded-lg bg-white text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="completed" className="block mb-1 text-gray-300">
              Completed
            </label>
            <select
              id="completed"
              className="w-full px-4 py-2 rounded-lg bg-white text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onChange={(e) => setCompleted(e.target.value)}
            >
              <option value="false">Not Completed</option>
              <option value="true">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 bg-white text-amber-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            ➕ Add Todo
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="bg-white w-full text-amber-900 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 mt-5 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
