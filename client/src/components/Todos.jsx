import { useEffect } from "react"

import { getAllTodos } from "../redux/actions/index.js"

import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"

export const Todos = () => {
  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch])
  return (
    <article>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo._id} />
        ))}
      </ul>
    </article>
  )
}

export default Todos
