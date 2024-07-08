import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormBootstrap() {
  const schema = yup.object().shape({
    username: yup.string().required("username is required"),
    email: yup.string().email().required("email is required"),
    age: yup
      .number("age should be a number between 18 and 50")
      .integer("age shold be integer")
      .min(18)
      .max(50)
      .required("age is required"),
    password: yup
      .string()
      .required()
      .min(6, "Password must be at least 6 characters long")
      .max(30, "Password must be at least 30 characters long")
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords must match")
      .required("confirm password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUser">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <Form.Text className=" text-danger">
              {errors.username?.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <Form.Text className=" text-danger">
              {errors.email?.message}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAge">
          <Form.Label column sm={2}>
            Age
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              placeholder="Age"
              {...register("age")}
            />
            <Form.Text className=" text-danger">
              {errors.age?.message}
            </Form.Text>
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
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <Form.Text className=" text-danger">
              {errors.password?.message}
            </Form.Text>
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
            <Form.Control
              type="password"
              placeholder="Confrim Password"
              {...register("confirmPassword")}
            />
            <Form.Text className=" text-danger">
              {errors.confirmPassword?.message}
            </Form.Text>
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
