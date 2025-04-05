import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetAllTodo from "./pages/GetAllTodo.jsx";
import GetSingleTodo from "./pages/GetSingleTodo.jsx";
import AddTodo from "./pages/AddTodo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="/allTodo" element={<GetAllTodo />} />
        <Route path="/allTodo/:id" element={<GetSingleTodo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
