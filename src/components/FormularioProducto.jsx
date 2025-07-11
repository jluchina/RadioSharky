import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { useProductosContext } from '../contexts/ProductosContext';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function FormularioProducto() {
  const { agregarProducto } = useProductosContext();
  const { admin } = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '9',
    description: '',
    imagen: ''
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return "El nombre es obligatorio.";
    }
    if (!producto.price || producto.price <= 0) {
      return "El precio debe ser mayor a 0.";
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      return "La descripción debe tener al menos 10 caracteres.";
    }
    if (!producto.imagen.trim()) {
      return "La URL de la imagen no debe estar vacía.";
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validarFormulario();

    if (validacion === true) {
      agregarProducto(producto)
        .then(() => {
          setProducto({ name: '', price: '', description: '', imagen: '' });
          dispararSweetBasico("Producto agregado con éxito", "El producto se ha agregado correctamente.", "success", "Cerrar");
        })
        .catch((error) => {
          dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar");
        });
    } else {
      dispararSweetBasico("Error en la carga de producto", validacion, "error", "Cerrar");
    }
  };

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4">Agregar Producto</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombreProducto">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Radio portátil"
                    name="name"
                    value={producto.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagenProducto">
                  <Form.Label>URL de la Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: https://miservidor.com/imagen.jpg"
                    name="imagen"
                    value={producto.imagen}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="precioProducto">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    name="price"
                    value={producto.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="descripcionProducto">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={producto.description}
                    onChange={handleChange}
                    placeholder="Agregá una descripción detallada del producto..."
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Agregar Producto
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioProducto;
