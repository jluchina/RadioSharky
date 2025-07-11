import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin7@gmail.com' && password === '123456') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      } if (error.code == "auth/weak-password") {
        dispararSweetBasico("Contraseña debil", "Password should be at least 6 characters", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  const handleSubmit2 = (e) => {
    logout()
  }

  function iniciarSesionEmailPass(e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if (error.code == "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar")
      }
      //alert("Error")
    })
  }

  function handleShow(e) {
    e.preventDefault();
    setShow(!show)
  }

  if (admin) {
    return (
 <div className="d-flex justify-content-center align-items-start min-vh-100 mt-5">
      <form onSubmit={handleSubmit2}>
        <button type="submit" className="btn btn-danger px-5 py-2 fs-5">Cerrar sesión Admin</button>
      </form>
    </div>
    )
  } if (user) {
    return (
 <div className="d-flex justify-content-center align-items-start min-vh-100 mt-5">
      <form onSubmit={handleSubmit2}>
        <button type="submit" className="btn btn-danger px-5 py-2 fs-5">Cerrar sesión Usuario</button>
      </form>
    </div>
    )

  } if (!user && show) {
    return (
      <div className='d-flex flex-column  justify-content-center  align-items-center min-vh-100'>
        <form onSubmit={iniciarSesionEmailPass} className="p-4 border rounded shadow ">
          <h2>Iniciar sesión con Email y pass</h2>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={usuario}
              onChange={(e) => setUsuario(e.target.value)} type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-50">Ingresar</button>
          <button style={{ marginTop: "2px" }} className="btn btn-secondary w-50" onClick={handleShow}>Registrate</button>
        </form>
      </div>
    )
 } if (!user && !show) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <form onSubmit={registrarUsuario} className="p-4 border rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Registrarse</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={handleShow}
        >
          Ya tengo cuenta
        </button>
      </form>
    </div>
  );

}
}
export default Login;
