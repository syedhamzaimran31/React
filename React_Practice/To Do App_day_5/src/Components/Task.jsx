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
          style={{ marginRight: "10px" }}
          variant="primary"
          size="sm"
          onClick={() => props.completeTask(props.id, props.isCompleted)}
        >
          {props.isCompleted ? "Refresh" : "Completed"}
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
