import { useEffect, useState } from "react";
import { Footer } from "../components/Footer.jsx";

export const Home = () => {
  const [home, setHome] = useState(null);
  const [tasks, setTasks] = useState([]);

  const FetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      const data = await res.json();
      setHome(data.user);
    } catch (error) {
      alert("Error al cargar el usuario");
    }
  };

  const FetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tasks-by-user", {
        credentials: "include",
      });
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      alert("Error del servidor");
    }
  };

  useEffect(() => {
    FetchProfile();
    FetchTasks();
  }, []);

  const completed = tasks.filter((t) => t.is_completed).length;
  const pending = tasks.filter((t) => !t.is_completed).length;

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-2xl mx-auto">
        {/* Título más compacto */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: '#212529' }}>
            Bienvenido, <span style={{ color: '#ff6b35' }}>{home?.name}</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: '#6c757d' }}>
            Resumen de tareas
          </p>
        </div>

        {/* Cards más compactas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {/* Total */}
          <div className="bg-white shadow-sm p-4 rounded-xl border-0">
            <h2 className="text-sm font-semibold mb-2" style={{ color: '#212529' }}>
              Total
            </h2>
            <p className="text-2xl font-bold" style={{ color: '#ff6b35' }}>
              {tasks.length}
            </p>
          </div>

          {/* Completadas */}
          <div 
            className="p-4 rounded-xl border-0 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(40, 167, 69, 0.08)',
              border: '1px solid rgba(40, 167, 69, 0.2)'
            }}
          >
            <h2 className="text-sm font-semibold mb-2" style={{ color: '#28a745' }}>
              Completadas
            </h2>
            <p className="text-2xl font-bold" style={{ color: '#28a745' }}>
              {completed}
            </p>
          </div>

          {/* Incompletas */}
          <div 
            className="p-4 rounded-xl border-0 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(220, 53, 69, 0.08)',
              border: '1px solid rgba(220, 53, 69, 0.2)'
            }}
          >
            <h2 className="text-sm font-semibold mb-2" style={{ color: '#dc3545' }}>
              Incompletas
            </h2>
            <p className="text-2xl font-bold" style={{ color: '#dc3545' }}>
              {pending}
            </p>
          </div>
        </div>

        {/* Progreso general más compacto */}
        {tasks.length > 0 && (
          <div className="bg-white shadow-sm p-4 rounded-xl border-0">
            <h3 className="text-sm font-semibold mb-3 text-center" style={{ color: '#212529' }}>
              Progreso
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(completed / tasks.length) * 100}%`,
                  backgroundColor: '#ff6b35'
                }}
              ></div>
            </div>
            <p className="text-xs text-center" style={{ color: '#6c757d' }}>
              <span style={{ color: '#ff6b35', fontWeight: 'bold' }}>{completed}</span>/{tasks.length} 
              ({Math.round((completed / tasks.length) * 100)}%)
            </p>
          </div>
        )}

        {/* Mensaje compacto cuando no hay tareas */}
        {tasks.length === 0 && (
          <div className="bg-white shadow-sm p-5 rounded-xl border-0 text-center">
            <h3 className="text-base font-semibold mb-2" style={{ color: '#212529' }}>
             ¡Bienvenido!
            </h3>
            <p className="text-sm" style={{ color: '#6c757d' }}>
              Crea tu primera tarea para comenzar.
            </p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};