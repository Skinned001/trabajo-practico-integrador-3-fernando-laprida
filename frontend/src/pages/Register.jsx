import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Footer } from "../components/Footer.jsx";

export const Register = () => {
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setIsLoading(true);

      const fetchRegister = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await fetchRegister.json();
      setIsLoading(false);

      if (!fetchRegister.ok) {
        alert(data.message);
        return;
      }

      alert("Usuario registrado correctamente");
      handleReset();

      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      alert("Ocurrió un error inesperado");
    }
  };

  return (
    <div 
      className="codec-auth-container"
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        flexGrow: 1
      }}>
        <form 
          className="codec-auth-box" 
          onSubmit={handleRegister}
          style={{
            width: '100%',
            maxWidth: '450px',
            backgroundColor: 'white',
            padding: '2rem 2.5rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            border: 'none',
            position: 'relative'
          }}
        >
          <h2 
            className="codec-auth-title"
            style={{
              color: '#212529',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}
          >
            CREAR CUENTA
          </h2>

          <p style={{
            color: '#6c757d',
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '0.9rem'
          }}>
            Regístrate para comenzar
          </p>

          <label 
            className="codec-form-label"
            style={{
              color: '#212529',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block'
            }}
          >
            USUARIO
          </label>
          <input
            className="codec-input"
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff',
              marginBottom: '1rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />

          <label 
            className="codec-form-label"
            style={{
              color: '#212529',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block'
            }}
          >
            EMAIL
          </label>
          <input
            className="codec-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff',
              marginBottom: '1rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />

          <label 
            className="codec-form-label"
            style={{
              color: '#212529',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block'
            }}
          >
            CONTRASEÑA
          </label>
          <input
            className="codec-input"
            type="password"
            name="password"
            placeholder="Ej: LA LI LU LE LO"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff',
              marginBottom: '1rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />

          <label 
            className="codec-form-label"
            style={{
              color: '#212529',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block'
            }}
          >
            NOMBRE
          </label>
          <input
            className="codec-input"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff',
              marginBottom: '1rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />

          <label 
            className="codec-form-label"
            style={{
              color: '#212529',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              display: 'block'
            }}
          >
            LASTNAME
          </label>
          <input
            className="codec-input"
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1px solid #dee2e6',
              borderRadius: '0.5rem',
              backgroundColor: '#ffffff',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b35';
              e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />

          <button 
            className="codec-btn" 
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '1.5rem'
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#e55a2b';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#ff6b35';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {isLoading ? "PROCESSING..." : "SIGN UP"}
          </button>

          <div style={{
            textAlign: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid #e9ecef'
          }}>
            <p style={{
              color: '#6c757d',
              margin: 0,
              fontSize: '0.9rem'
            }}>
              ¿Ya tienes cuenta?{' '}
              <a 
                href="/Login"
                style={{
                  color: '#ff6b35',
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => e.target.style.color = '#e55a2b'}
                onMouseOut={(e) => e.target.style.color = '#ff6b35'}
              >
                Inicia sesión aquí
              </a>
            </p>
          </div>

          <div className="codec-scanlines"></div>
        </form>
      </div>

      <Footer />
    </div>
  );
};