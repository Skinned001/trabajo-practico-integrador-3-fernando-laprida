import { Link } from "react-router";
import { Logout } from "./Logout";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg codec-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand codec-navbar-brand" to="/home">
          HOME
        </Link>

        <button
          className="navbar-toggler codec-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#codecNav"
        >
          <span className="navbar-toggler-icon codec-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="codecNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link codec-link" to="/register">
                Registrarse
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link codec-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link codec-link" to="/profile">
                Perfil
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link codec-link" to="/tasks">
                Tareas
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link codec-link" to="/createTask">
                Crear Tarea
              </Link>
            </li>
          </ul>

          <div>
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
};