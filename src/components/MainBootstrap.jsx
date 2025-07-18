import { Container, Row, Col, Image } from "react-bootstrap";
import radios from '/imagenes/radios.jpg';
import fondo2 from '/imagenes/fondo2.webp';
import mediosPago from '/imagenes/medios-de-pago.jpg';



function MainBootstrap() {
  return (
    <Container className="my-5">

      {/* Título principal */}
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="display-5 fw-bold">RADIOSHARKY</h2>
          <h3 className="display-5">Lo nuestro es comunicarnos.</h3>
        </Col>
      </Row>

      {/* Imagen destacada */}
      <Row className="mb-5 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Image
            src={radios}
            alt="Radios"
            fluid
            rounded
          />
        </Col>
      </Row>

      {/* Nuestra experiencia */}
      <Row className="mb-5 align-items-center">
        <Col xs={12} md={5} className="mb-4 mb-md-0">
          <h3 className="fw-bold">Nuestra Experiencia</h3>
          <p>
            Somos una empresa con más de 35 años de experiencia en la venta de radios, repetidoras y torres estructuradas en todo el país. Ofrecemos una amplia gama de soluciones de comunicación para satisfacer las necesidades de individuos y empresas.
          </p>
          <p>
            Contamos con una variedad de opciones de radio, desde radios móviles y portátiles hasta repetidoras y torres estructuradas de las mejores marcas del mercado.
          </p>
        </Col>
        <Col xs={12} md={7} className="text-center">
          <Image
            src={fondo2}
            alt="Torre de comunicación"
            fluid
            style={{ maxWidth: "80%" }}
            rounded
          />
        </Col>
      </Row>

      {/* Comunicaciones seguras */}
      <Row className="mb-5">
        <Col className="text-center">
          <h3 className="fw-bold">Comunicaciones seguras</h3>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Nos enfocamos en crear soluciones a medida para las necesidades de cada empresa. Aunque aparentemente cualquier radio puede cumplir el objetivo de comunicar en forma segura y sin interrupciones, una solución personalizada ayuda a bajar los costos y generar ahorros en los proyectos especiales.
          </p>
        </Col>
      </Row>

      {/* Imagen de medios de pago */}
      <Row className="mb-5 justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Image
            src={mediosPago}
            alt="Medios de Pago"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
