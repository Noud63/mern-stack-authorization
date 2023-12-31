import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card text-white w-75" style={{ background: 'linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 0.8))' }}>
          <h1 className="text-center text-black mb-4">MERN Authentication</h1>
          <p className="text-center mb-4 pb-2">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie.<br />
            Built with React, Redux-toolkit, RTK Query and React Bootstrap.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="custom" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="custom" href="/register">
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero