import { useEffect } from "react"
import { getAllTodos } from "../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux"
import Todo from "./Todo"
import Tabs from "./Tabs"

export const Todos = () => {
  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos)
  const currentTab = useSelector((state) => state.currentTab)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch])
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo._id} />
        ))}
      </ul>
    </article>
  )
}

export default Todos
