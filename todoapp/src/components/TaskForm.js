import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const TaskForm = ({ addTask, editTask, selectedTask, users }) => {
  const [task, setTask] = useState({
    title: "",
    assignedUser: "",
    status: "In Progress",
    dueDate: "",
    priority: "Low",
    comments: "",
  });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      editTask(task);
    } else {
      addTask({ ...task, id: Date.now() });
    }
    setTask({
      title: "",
      assignedUser: "",
      status: "In Progress",
      dueDate: "",
      priority: "Low",
      comments: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  

};

export default TaskForm;