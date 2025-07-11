import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Sobre Nosotros</h2>
              <p>
                Bienvenido a nuestra tienda online. Nos especializamos en ofrecer
                productos de alta calidad a precios accesibles. Nuestro objetivo es
                brindarte una experiencia de compra simple, rápida y segura.
              </p>
              <p>
                Ya sea que estés buscando tecnología, ropa, accesorios o más, en
                nuestro e-commerce vas a encontrar lo que necesitás.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
