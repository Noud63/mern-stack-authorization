import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import {HiArrowNarrowRight } from "react-icons/hi"; 


const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1>SignUp</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label className="text-black">Name</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label className="text-black">Email Address</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label className="text-black">Password</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label className="text-black">Password</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="custom" className="mt-3">
          Sign Up
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-white">
          Already registered? <HiArrowNarrowRight/>{" "}
          <Link to="/login" className="text-white">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
