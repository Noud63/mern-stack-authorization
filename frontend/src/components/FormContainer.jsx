import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5" style={{ background: 'linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 0.8))' }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
