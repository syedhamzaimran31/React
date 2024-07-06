import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";  
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormBootstrap() {
  return (
    <>
      <Form className="m-5">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUser">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="text" placeholder="Username" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAge">
          <Form.Label column sm={2}>
            Age
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="number" placeholder="Age" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalConfirmPassword"
        >
          <Form.Label column sm={2}>
            Confirm Password
          </Form.Label>
          <Col sm={5}>
            <Form.Control type="password" placeholder="Confrim Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default FormBootstrap;
