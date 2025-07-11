import { useProductosContext } from "../contexts/ProductosContext";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

function CarruselBootstrap() {
  const { productos, obtenerProductos } = useProductosContext();
  const [cargando, setCargando] = useState(true);
  const [productosCargados, setProductosCargados] = useState(false);
  

console.log(productos)

useEffect(() => {
  if (productos.length === 0) {
    obtenerProductos()
      .then(() => setCargando(false))
      .catch(() => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  } else {
    setCargando(false);
  }
}, [productos]);


console.log(productos)
  const primerosTres = productos.slice(0, 3);

  if (cargando) return <p className="text-center my-5">Cargando carrusel...</p>;
  if (primerosTres.length === 0) return <p className="text-center my-5">No hay productos para mostrar.</p>;
console.log(primerosTres)
  return (
    <Container className="my-5">
      <Carousel fade>
        {primerosTres.map((producto) => (
          <Carousel.Item key={producto.id}>
            <img
              className="d-block w-100"
              src={producto.imagen}
              alt={producto.name}
              style={{
                height: "400px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
                padding: "20px"
              }}
            />
            <Carousel.Caption
              style={{
                backgroundColor: "rgba(20, 27, 65, 0.99)",
                padding: "15px",
                borderRadius: "10px"
              }}
            >
              <h5 className="text-light">{producto.name}</h5>
              <p className="text-light small">{producto.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarruselBootstrap;
