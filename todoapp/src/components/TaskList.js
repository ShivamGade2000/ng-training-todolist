import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Assigned User</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.assignedUser}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
              <button onClick={() => selectTask(task)} className="btn btn-warning btn-sm me-2">
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

</>
);


  export default TaskList;