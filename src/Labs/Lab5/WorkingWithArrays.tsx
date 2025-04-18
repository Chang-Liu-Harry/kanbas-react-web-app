import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;
export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({ id: "1", title: "", completed: false });
  const [error, setError] = useState<string | null>(null);
  // Handlers
  const getTodos = async () => {
    setError(null);
    try {
      const res = await fetch(API);
      setTodos(await res.json());
    } catch (e) { setError("Failed to fetch todos"); }
  };
  const getTodoById = async () => {
    setError(null);
    try {
      const res = await fetch(`${API}/${todo.id}`);
      setTodo(await res.json());
    } catch (e) { setError("Failed to fetch todo by ID"); }
  };
  const getCompletedTodos = async (completed: boolean) => {
    setError(null);
    try {
      const res = await fetch(`${API}?completed=${completed}`);
      setTodos(await res.json());
    } catch (e) { setError("Failed to fetch filtered todos"); }
  };
  const createTodo = async () => {
    setError(null);
    try {
      const res = await fetch(`${API}/create`);
      setTodos(await res.json());
    } catch (e) { setError("Failed to create todo"); }
  };
  const deleteTodo = async () => {
    setError(null);
    try {
      const res = await fetch(`${API}/${todo.id}/delete`);
      setTodos(await res.json());
    } catch (e) { setError("Failed to delete todo"); }
  };
  const updateTodoTitle = async () => {
    setError(null);
    try {
      const res = await fetch(`${API}/${todo.id}/title/${todo.title}`);
      setTodo(await res.json());
    } catch (e) { setError("Failed to update todo title"); }
  };
  const updateTodoCompleted = async () => {
    setError(null);
    try {
      const res = await fetch(`${API}/${todo.id}/completed/${todo.completed}`);
      setTodo(await res.json());
    } catch (e) { setError("Failed to update todo completed"); }
  };
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <h4>Retrieving Arrays</h4>
      <button id="wd-retrieve-todos" className="btn btn-primary me-2" onClick={getTodos}>
        Get Todos
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.id}: {t.title} ({t.completed ? "Completed" : "Incomplete"})</li>
        ))}
      </ul>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <button id="wd-retrieve-todo-by-id" className="btn btn-secondary me-2" onClick={getTodoById}>
        Get Todo by ID
      </button>
      <input id="wd-todo-id" value={todo.id} className="form-control w-50 mb-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <div>Current Todo: {todo.id}: {todo.title} ({todo.completed ? "Completed" : "Incomplete"})</div>
      <hr />
      <h4>Filtering Array Items</h4>
      <button id="wd-retrieve-completed-todos" className="btn btn-success me-2" onClick={() => getCompletedTodos(true)}>
        Get Completed Todos
      </button>
      <button id="wd-retrieve-incomplete-todos" className="btn btn-warning" onClick={() => getCompletedTodos(false)}>
        Get Incomplete Todos
      </button>
      <hr />
      <h4>Creating new Items in an Array</h4>
      <button id="wd-create-todo" className="btn btn-info me-2" onClick={createTodo}>
        Create Todo
      </button>
      <hr />
      <h4>Deleting an Item from an Array</h4>
      <button id="wd-delete-todo" className="btn btn-danger me-2" onClick={deleteTodo}>
        Delete Todo by ID
      </button>
      <hr />
      <h4>Updating an Item in an Array</h4>
      <input id="wd-todo-title" value={todo.title} className="form-control w-50 mb-2"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <button id="wd-update-todo-title" className="btn btn-success me-2" onClick={updateTodoTitle}>
        Update Todo Title
      </button>
      <div className="form-check form-switch mb-2">
        <input className="form-check-input" type="checkbox" id="wd-todo-completed"
          checked={todo.completed} onChange={e => setTodo({ ...todo, completed: e.target.checked })} />
        <label className="form-check-label" htmlFor="wd-todo-completed">Completed</label>
      </div>
      <button id="wd-update-todo-completed" className="btn btn-warning" onClick={updateTodoCompleted}>Update Todo Completed</button>
      <hr />
    </div>
  );
}
