import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-sm p-4 bg-light rounded">
            <Card.Body>
              <h2 className="text-center mb-4" style={{ fontWeight: '700', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#004085' }}>
                Sobre Nosotros
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#212529' }}>
                Bienvenido a nuestra tienda especializada en dispositivos de comunicación por radio y equipos para radioaficionados. Desde hace más de 35 años, nos dedicamos a ofrecer soluciones confiables y de última tecnología para mantenerte conectado dondequiera que estés.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#212529' }}>
                Nuestro catálogo incluye radios portátiles, repetidoras, antenas y accesorios de marcas reconocidas, pensados tanto para profesionales como para entusiastas del mundo de la radio. Sabemos que una comunicación segura y clara es fundamental, por eso asesoramos y acompañamos a cada cliente en la elección del equipo ideal para su necesidad.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#212529' }}>
                Ya sea que estés iniciándote en la radioafición o busques equipos avanzados para proyectos profesionales, en nuestro e-commerce encontrarás la calidad, variedad y atención personalizada que merecés. Tu satisfacción y confianza son nuestro compromiso.
              </p>
              <p className="text-center mt-4" style={{ fontStyle: 'italic', color: '#0c5460', fontWeight: '600' }}>
                “Conectamos personas, potenciamos comunicaciones.” 
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
