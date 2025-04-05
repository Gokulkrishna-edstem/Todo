import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, title, completed }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-2">
        #{id}: {title}
      </h2>
      <p className={completed ? "text-green-600" : "text-red-600"}>
        {completed ? "✅ Completed" : "❌ Pending"}
      </p>
      <Link
        to={`/allTodo/${id}`}
        className="text-blue-600 underline block mt-2"
      >
        View Details
      </Link>
    </div>
  );
}

function GetAllTodo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) {
    return <p className="text-white text-xl p-4">Loading todos...</p>;
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      ) : (
        <p className="text-white text-xl">No todos found.</p>
      )}
    </div>
  );
}

export default GetAllTodo;
