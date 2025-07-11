import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";
import { Button, Row, Col, Card, Container, InputGroup, FormControl } from "react-bootstrap";

function ProductoDetalle() {
  const navegar = useNavigate();
  const { admin } = useAuthContext();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { productoEncontrado, obtenerProducto, eliminarProducto } = useProductosContext();

  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id)
      .then(() => setCargando(false))
      .catch((error) => {
        if (error === "Producto no encontrado") setError("Producto no encontrado");
        else setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    agregarAlCarrito({ ...productoEncontrado, cantidad });
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
  }

  function dispararEliminar() {
    eliminarProducto(id)
      .then(() => navegar("/productos"))
      .catch((error) => {
        dispararSweetBasico("Hubo un problema al eliminar el producto", error, "error", "Cerrar");
      });
  }

  const sumarContador = () => setCantidad((prev) => prev + 1);
  const restarContador = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  if (cargando) return <p className="text-center mt-5">Cargando producto...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <Container className="my-5">

      <Card className="shadow">
        <Row className="g-0">
          <Col md={5} className="text-center p-4">
            <Card.Img
              src={productoEncontrado.imagen}
              alt={productoEncontrado.name}
              className="img-fluid rounded"
            />
          </Col>

          <Col md={7}>
            <Card.Body className="d-flex flex-column justify-content-between h-100 p-4">
              <div>
                <h3 className="mb-3">{productoEncontrado.name}</h3>
                <p className="text-muted">{productoEncontrado.description}</p>
                <h4 className="text-primary">{productoEncontrado.price} $</h4>

                <InputGroup className="my-3" style={{ maxWidth: "150px" }}>
                  <Button variant="outline-secondary" onClick={restarContador}>−</Button>
                  <FormControl
                    value={cantidad}
                    readOnly
                    className="text-center"
                  />
                  <Button variant="outline-secondary" onClick={sumarContador}>+</Button>
                </InputGroup>
              </div>

              <div className="d-flex gap-2 flex-wrap mt-3">
                {admin ? (
                  <>
                    <Link to={`/admin/editarProducto/${id}`}>
                      <Button variant="warning">Editar Producto</Button>
                    </Link>
                    <Button variant="danger" onClick={dispararEliminar}>
                      Eliminar Producto
                    </Button>
                  </>
                ) : (
                  <Button variant="success" onClick={funcionCarrito}>
                    Agregar al carrito
                  </Button>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="d-flex justify-content-end mt-3">
        <Link to="/productos">
          <Button variant="secondary">
            ← Volver a Productos
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default ProductoDetalle;
