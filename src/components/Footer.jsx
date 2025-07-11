import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-light py-4 mt-5" 
     style={{ backgroundColor: "rgb(20, 27, 65)" }}>
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Consultas</h5>
            <p>
              <FaWhatsapp className="me-2" />
              Whatsapp: +54 11 1234-5678
            </p>
            <p>
              Escribinos a:{" "}
              <a href="mailto:info@radioshark.com" className="text-light">
                info@radioshark.com
              </a>
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Links útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.lu4aa.org/wp/"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Radio Club Argentino
                </a>
              </li>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/Anexo:Bandas_de_radiocomunicaciones_asignadas_en_Argentina"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Banda de Frecuencias
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Síguenos</h5>
            <p>
              <a
                href="https://www.youtube.com/"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={24} />
              </a>
            </p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Radiosharky. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
