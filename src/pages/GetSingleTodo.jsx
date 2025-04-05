import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function GetSingleTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleTodo, setSingleTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSingleTodo() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setSingleTodo(response.data);
      } catch (err) {
        console.error("Error fetching todo:", err);
      } finally {
        setLoading(false);
      }
    }
    getSingleTodo();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-amber-950">
        <p className="text-white text-xl">Loading todo details...</p>
      </div>
    );
  }

  return (
    <div
      className={` w-full h-screen ${
        singleTodo.completed ? "bg-green-950" : "bg-amber-950"
      }  flex flex-col justify-center items-center text-white px-6 `}
    >
      <div
        className={`${
          singleTodo.completed ? "bg-green-700" : "bg-amber-700"
        } p-8 rounded-2xl shadow-lg max-w-md w-full text-center`}
      >
        <h5 className="mb-3 text-lg">
          <span className="font-semibold text-gray-300">ID:</span>{" "}
          {singleTodo.id}
        </h5>
        <h1 className="text-2xl font-bold mb-3">
          <span className="text-gray-300">Title:</span> {singleTodo.title}
        </h1>
        <p className="text-lg mb-6">
          <span className="text-gray-300">Completed:</span>{" "}
          <span
            className={singleTodo.completed ? "text-green-400" : "text-red-400"}
          >
            {singleTodo.completed ? "Yes ✅" : "No ❌"}
          </span>
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-amber-900 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default GetSingleTodo;
