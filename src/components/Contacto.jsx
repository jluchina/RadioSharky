import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contacto() {
  return (
    <main className="py-4">
      <Container className="bg-light p-4 rounded shadow">
        <h2 className="text-center mb-4">Contacto</h2>

        <Row className="mb-4">
          <Col md={6}>
            <h4>Información de contacto</h4>
            <ul className="list-unstyled">
              <li><strong>Ubicación:</strong> Parque Chacabuco - C.A.B.A. - Argentina</li>
              <li><strong>WhatsApp:</strong> +54 11 1234-5678</li>
              <li><strong>Correo electrónico:</strong> info@radioshark.com</li>
            </ul>
          </Col>

          <Col md={6}>
            <h4>Acerquenos su consulta o requerimiento</h4>
            <Form action="https://formspree.io/f/mwpedalz" method="POST">
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Control type="text" name="nombre" placeholder="Nombre" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" name="email" placeholder="Correo electrónico" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Control as="textarea" name="mensaje" rows={4} placeholder="Escribe tu consulta" required />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                Enviar Consulta
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5 className="mb-3">Nuestra ubicación</h5>
            <div style={{ width: "100%", height: "150px" }}>
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.522239929461!2d-58.448441163332525!3d-34.63366813488858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca33798ad247%3A0x3de37b3b634b3e0d!2sAch%C3%A1val%20900%2C%20C1406CWN%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730863592283!5m2!1ses-419!2sar"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contacto;
