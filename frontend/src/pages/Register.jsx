import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";
import { useState } from "react";

export const Register = () => {
  const { form, handleChange, handleReset } = useForm({
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
        body: JSON.stringify(form),
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
    <div className="codec-auth-container">
      <form className="codec-auth-box" onSubmit={handleRegister}>
        <h2 className="codec-auth-title">CREAR CUENTA</h2>

        <label className="codec-form-label">USUARIO</label>
        <input
          className="codec-input"
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          onChange={handleChange}
        />

        <label className="codec-form-label">EMAIL</label>
        <input
          className="codec-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <label className="codec-form-label">CONTRASEÑA</label>
        <input
          className="codec-input"
          type="password"
          name="password"
          placeholder="Ej: LA LI LU LE LO"
          onChange={handleChange}
        />

        <label className="codec-form-label">NOMBRE</label>
        <input
          className="codec-input"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <label className="codec-form-label">LASTNAME</label>
        <input
          className="codec-input"
          type="text"
          name="lastname"
          placeholder="Apellido"
          onChange={handleChange}
        />

        <button className="codec-btn" disabled={isLoading}>
          {isLoading ? "PROCESSING..." : "SIGN UP"}
        </button>

        <div className="codec-scanlines"></div>
      </form>
    </div>
  );
};