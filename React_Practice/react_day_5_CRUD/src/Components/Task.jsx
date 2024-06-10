import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function Task(props) {
  return (
    <ListGroup.Item
      key={props.id}
      className="d-flex justify-content-between align-items-center"
      style={{ backgroundColor: props.taskCompleted ? "green" : "blue" }}
    >
      {console.log(props.taskCompleted ? "Green" : "Blue")}

      {props.taskName}
      <div>
        <Button
          variant="primary"
          size="sm"
          onClick={() => props.completeTask(props.id, props.isCompleted)}
        >
          {props.isCompleted ? "Refresh" : "Completed"}
        </Button>
        <Button
          style={{ marginInline: "10px" }}
          variant="secondary"
          size="sm"
          onClick={() => props.editTask(props.id)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => props.deleteTask(props.id)}
        >
          X
        </Button>
      </div>
    </ListGroup.Item>
  );
}
