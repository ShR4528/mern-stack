import express from "express";



import { addTodo, toggleTodoDone, getAllTodos } from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone)


export default route;