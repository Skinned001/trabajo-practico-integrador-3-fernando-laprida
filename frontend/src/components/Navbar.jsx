import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const IsLogged = localStorage.getItem("isLogged");

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  // Función para verificar si la ruta está activa
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center border-b" style={{ borderColor: '#e9ecef' }}>
      {/* Logo */}
      <h1 className="text-xl font-bold" style={{ color: '#212529' }}>
        TaskManager
      </h1>

      <div className="flex gap-3 items-center">
        {IsLogged ? (
          <>
            {/* Home */}
            <Link
              to="/Home"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={isActive('/Home') ? {
                backgroundColor: '#ff6b35',
                color: 'white',
                transform: 'translateY(-1px)'
              } : {
                backgroundColor: 'transparent',
                color: '#212529',
                border: '2px solid transparent'
              }}
              onMouseOver={(e) => {
                if (!isActive('/Home')) {
                  e.target.style.backgroundColor = '#ff6b35';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/Home')) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#212529';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              Home
            </Link>

            {/* Tasks */}
            <Link
              to="/Tasks"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={isActive('/Tasks') ? {
                backgroundColor: '#ff6b35',
                color: 'white',
                transform: 'translateY(-1px)'
              } : {
                backgroundColor: 'transparent',
                color: '#212529',
                border: '2px solid transparent'
              }}
              onMouseOver={(e) => {
                if (!isActive('/Tasks')) {
                  e.target.style.backgroundColor = '#ff6b35';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/Tasks')) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#212529';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              Tasks
            </Link>

            {/* Profile */}
            <Link
              to="/Profile"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={isActive('/Profile') ? {
                backgroundColor: '#ff6b35',
                color: 'white',
                transform: 'translateY(-1px)'
              } : {
                backgroundColor: 'transparent',
                color: '#212529',
                border: '2px solid transparent'
              }}
              onMouseOver={(e) => {
                if (!isActive('/Profile')) {
                  e.target.style.backgroundColor = '#ff6b35';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/Profile')) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#212529';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              Profile
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2"
              style={{
                borderColor: '#dc3545',
                color: '#dc3545',
                backgroundColor: 'transparent'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#dc3545';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#dc3545';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <Link
              to="/Login"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={isActive('/Login') ? {
                backgroundColor: '#ff6b35',
                color: 'white',
                transform: 'translateY(-1px)'
              } : {
                backgroundColor: 'transparent',
                color: '#212529',
                border: '2px solid transparent'
              }}
              onMouseOver={(e) => {
                if (!isActive('/Login')) {
                  e.target.style.backgroundColor = '#ff6b35';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive('/Login')) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#212529';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/Register"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 border-2"
              style={{
                borderColor: '#ff6b35',
                color: '#ff6b35',
                backgroundColor: 'transparent'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ff6b35';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ff6b35';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};