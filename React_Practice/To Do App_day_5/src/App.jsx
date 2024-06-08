// src/App.js

// map: Used to transform each element in the array,
// often returning new objects to reflect changes.

// filter: Used to create a new array with elements that pass a test,
// returning a subset of the original array without modification to individual elements.

import React, { useState } from "react";
import { Button, Form, ListGroup, Container } from "react-bootstrap";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [newTask, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function addTask() {
    if (newTask) {
      const task = {
        id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
        taskName: newTask,
        isCompleted: false,
      };
      setToDoList([...toDoList, task]);
      setTask(""); // Clear the input field
    } else {
      alert("Please enter a valid task");
    }
  }
  function handleInputChange(event) {
    setTask(event.target.value);
  }

  const deleteTask = (id) => {
    //tasks(object form) is stored in setToDoList if (id of task) !== (deleted task id)
    setToDoList(toDoList.filter((tasktoDelete) => tasktoDelete.id !== id));
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((checkTaskComplete) => {
        if (checkTaskComplete.id === id) {
          checkTaskComplete.isCompleted = !checkTaskComplete.isCompleted;
          return checkTaskComplete;
          // OR alternatively
          // Create and return a new object with the updated isCompleted property
          return {
            ...checkTaskComplete,
            isCompleted: !checkTaskComplete.isCompleted,
          };

          return checkTaskComplete;
        }
      })
    );
  };

  return (
    <Container className="mt-5">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
      </Form.Group>
      <Button variant="primary" className="mb-3" onClick={addTask}>
        Add Task
      </Button>
      <ListGroup>
        {toDoList.map((task) => (
          <Task
            taskName={task.taskName}
            taskCompleted={task.isCompleted}
            id={task.id}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
