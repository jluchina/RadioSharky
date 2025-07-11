import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext.jsx";
import { Row, Col, Button, Container } from "react-bootstrap";

export default function Admin() {
  const { admin } = useAuthContext();
  const navigate = useNavigate();

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  function funcionIrAgregar() {
    navigate("/admin/agregarProductos");
  }

  return (
    <div>
    {/* <Container className="py-5"> */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h2 className="mb-4">Panel de Administración</h2>
          <Button variant="warning" onClick={funcionIrAgregar}>
            Agregar Nuevo Producto
          </Button>
        </Col>
      </Row>
    {/* </Container> */}
    </div>
  );
}
