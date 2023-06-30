import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import {HiArrowNarrowRight } from "react-icons/hi"; 

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email,
        password,
      }).unwrap();                                   /* backend request */
      dispatch( setCredentials({ ...res }))                   /* add user to localstorage and state*/;                                         
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  };

  return (
    <FormContainer className="border border-warning">
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="custom" className="mt-3">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-white">
          New Customer? <HiArrowNarrowRight/>{" "}
          <Link to="/register" className="text-white">
            <span>Register</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
