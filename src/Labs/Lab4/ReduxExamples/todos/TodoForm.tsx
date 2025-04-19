import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <input
          className="form-control me-3"
          style={{ flex: 1 }}
          value={todo.title}
          onChange={(e) =>
            dispatch(setTodo({ ...todo, title: e.target.value }))
          }
        />
        <div>
          <button
            onClick={() => dispatch(updateTodo(todo))}
            id="wd-update-todo-click"
            className="btn btn-warning me-2"
          >
            Update
          </button>
          <button
            onClick={() => dispatch(addTodo(todo))}
            id="wd-add-todo-click"
            className="btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </li>
  );
}