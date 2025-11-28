import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import { Loading } from "../components/Loading.jsx";
import { useState } from "react";
import { Footer } from "../components/Footer.jsx";

export const Login = () => {
  const navigate = useNavigate();
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      console.log(res)
      const data = await res.json();
      if (!res.ok) {
        return alert(data.message),setloading(false), handleReset();
      }
      await new Promise((resolver) => setTimeout(resolver, 2000)),
        setloading(false);
      localStorage.setItem("isLogged", "true"), navigate("/Home");
    } catch (error) {
      return (
        alert("error al iniciar sesion"), console.log(error), handleReset()
      );
    }
  };
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-between" 
          style={{ backgroundColor: '#f8f9fa' }}>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loading />
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center px-3 flex-grow-1">
          {/* Card del formulario con bordes y sombra */}
          <div className="card border-0 shadow-lg rounded-4" 
               style={{ 
                 maxWidth: '420px', 
                 width: '100%',
                 border: '2px solid #ff6b35 !important'
               }}>
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleLogin}>
                {/* Título */}
                <div className="text-center mb-4">
                  <h1 className="h2 fw-bold mb-2" style={{ color: '#212529' }}>
                    Iniciar Sesión
                  </h1>
                  <p className="text-muted">Ingresa a tu cuenta</p>
                </div>

                {/* USERNAME */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-semibold" style={{ color: '#212529' }}>
                    Usuario
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={formState.username}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg border-1"
                    style={{ 
                      borderColor: '#dee2e6',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                {/* PASSWORD */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold" style={{ color: '#212529' }}>
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={formState.password}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg border-1"
                    style={{ 
                      borderColor: '#dee2e6',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="btn w-100 py-3 fw-bold text-white border-0 rounded-3"
                  style={{
                    backgroundColor: '#ff6b35',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#e55a2b';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ff6b35';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Iniciar sesión
                </button>

                {/* Enlace de registro */}
                <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: '#e9ecef' }}>
                  <p className="text-muted mb-0">
                    ¿No tienes cuenta?
                    <a
                      href="/Register"
                      className="text-decoration-none fw-bold ms-1"
                      style={{ color: '#ff6b35' }}
                      onMouseOver={(e) => e.target.style.color = '#e55a2b'}
                      onMouseOut={(e) => e.target.style.color = '#ff6b35'}
                    >
                      Regístrate aquí
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};