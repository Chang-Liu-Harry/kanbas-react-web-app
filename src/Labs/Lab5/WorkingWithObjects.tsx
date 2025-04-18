import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  // Assignment state
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  // Module state
  const [moduleObj, setModuleObj] = useState({
    id: "mod1", name: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS and Express.",
    course: "CS5610"
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
  const [error, setError] = useState<string | null>(null);
  // Assignment handlers
  const getAssignment = async () => {
    setError(null);
    try {
      const res = await fetch(ASSIGNMENT_API_URL);
      setAssignment(await res.json());
    } catch (e) { setError("Failed to fetch assignment"); }
  };
  const getAssignmentTitle = async () => {
    setError(null);
    try {
      const res = await fetch(`${ASSIGNMENT_API_URL}/title`);
      const title = await res.json();
      setAssignment(a => ({ ...a, title }));
    } catch (e) { setError("Failed to fetch title"); }
  };
  const updateAssignmentTitle = async () => {
    setError(null);
    try {
      const res = await fetch(`${ASSIGNMENT_API_URL}/title/${assignment.title}`);
      setAssignment(await res.json());
    } catch (e) { setError("Failed to update title"); }
  };
  const updateAssignmentScore = async () => {
    setError(null);
    try {
      const res = await fetch(`${ASSIGNMENT_API_URL}/score/${assignment.score}`);
      setAssignment(await res.json());
    } catch (e) { setError("Failed to update score"); }
  };
  const updateAssignmentCompleted = async () => {
    setError(null);
    try {
      const res = await fetch(`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`);
      setAssignment(await res.json());
    } catch (e) { setError("Failed to update completed"); }
  };
  // Module handlers
  const getModule = async () => {
    setError(null);
    try {
      const res = await fetch(MODULE_API_URL);
      setModuleObj(await res.json());
    } catch (e) { setError("Failed to fetch module"); }
  };
  const getModuleName = async () => {
    setError(null);
    try {
      const res = await fetch(`${MODULE_API_URL}/name`);
      const name = await res.json();
      setModuleObj(m => ({ ...m, name }));
    } catch (e) { setError("Failed to fetch module name"); }
  };
  const updateModuleName = async () => {
    setError(null);
    try {
      const res = await fetch(`${MODULE_API_URL}/name/${moduleObj.name}`);
      setModuleObj(await res.json());
    } catch (e) { setError("Failed to update module name"); }
  };
  const updateModuleDescription = async () => {
    setError(null);
    try {
      const res = await fetch(`${MODULE_API_URL}/description/${moduleObj.description}`);
      setModuleObj(await res.json());
    } catch (e) { setError("Failed to update module description"); }
  };
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <h4>Assignment Object</h4>
      <button id="wd-retrieve-assignments" className="btn btn-primary me-2" onClick={getAssignment}>
        Get Assignment
      </button>
      <button id="wd-retrieve-assignment-title" className="btn btn-secondary me-2" onClick={getAssignmentTitle}>
        Get Title
      </button>
      <input className="form-control w-75 mb-2" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <button id="wd-update-assignment-title" className="btn btn-success me-2" onClick={updateAssignmentTitle}>
        Update Title
      </button>
      <input className="form-control w-25 mb-2" id="wd-assignment-score" type="number"
        value={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })}/>
      <button id="wd-update-assignment-score" className="btn btn-info me-2" onClick={updateAssignmentScore}>
        Update Score
      </button>
      <div className="form-check form-switch mb-2">
        <input className="form-check-input" type="checkbox" id="wd-assignment-completed"
          checked={assignment.completed} onChange={e => setAssignment({ ...assignment, completed: e.target.checked })} />
        <label className="form-check-label" htmlFor="wd-assignment-completed">Completed</label>
      </div>
      <a id="wd-update-assignment-completed" className="btn btn-warning me-2"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>Update Completed</a>
      <hr />
      <h4>Module Object</h4>
      <a id="wd-retrieve-module" className="btn btn-primary me-2"
         href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-secondary me-2"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <input className="form-control w-75 mb-2" id="wd-module-name"
        defaultValue={moduleObj.name} onChange={(e) =>
          setModuleObj({ ...moduleObj, name: e.target.value })}/>
      <a id="wd-update-module-name" className="btn btn-success me-2"
         href={`${MODULE_API_URL}/name/${moduleObj.name}`}>
        Update Module Name
      </a>
      <input className="form-control w-75 mb-2" id="wd-module-description"
        defaultValue={moduleObj.description} onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })}/>
      <a id="wd-update-module-description" className="btn btn-info"
         href={`${MODULE_API_URL}/description/${moduleObj.description}`}>
        Update Module Description
      </a>
      <hr />
    </div>
  );
}
