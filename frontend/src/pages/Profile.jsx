import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer.jsx";

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    id: "",
    name: "",
    lastname: "",
  });

  const showProfile = async () => {
    try {
      const fetchProfile = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });

      setIsLoading(true);
      const data = await fetchProfile.json();
      setUser(data.user);
      setIsLoading(false);
    } catch (error) {
      alert("Ocurrió un error inesperado");
    }
  };

  useEffect(() => {
    showProfile();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen p-4 flex flex-col" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="flex-1 flex items-center justify-center">
        {/* Tarjeta centrada */}
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-2xl border-0 p-6 relative overflow-hidden">
            {/* Título */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2" style={{ color: '#212529' }}>
                Perfil de Usuario
              </h1>
              <p className="text-sm" style={{ color: '#6c757d' }}>
                Información de tu cuenta
              </p>
            </div>

            {/* Información del usuario */}
            <div className="space-y-4">
              {/* ID */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#6c757d' }}>
                  ID
                </span>
                <div 
                  className="p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderColor: '#e9ecef'
                  }}
                >
                  <span className="font-medium" style={{ color: '#212529' }}>
                    {user.id}
                  </span>
                </div>
              </div>

              {/* Nombre */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#6c757d' }}>
                  Nombre
                </span>
                <div 
                  className="p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderColor: '#e9ecef'
                  }}
                >
                  <span className="font-medium" style={{ color: '#212529' }}>
                    {user.name}
                  </span>
                </div>
              </div>

              {/* Apellido */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: '#6c757d' }}>
                  Apellido
                </span>
                <div 
                  className="p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: '#f8f9fa',
                    borderColor: '#e9ecef'
                  }}
                >
                  <span className="font-medium" style={{ color: '#212529' }}>
                    {user.lastname}
                  </span>
                </div>
              </div>
            </div>

            {/* Elemento decorativo naranja */}
            <div 
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: '#ff6b35' }}
            ></div>
          </div>

          {/* Información adicional */}
          <div className="text-center mt-4">
            <p className="text-xs" style={{ color: '#adb5bd' }}>
              Esta información es gestionada por el sistema
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};