export const Footer = () => {
  return (
    <footer 
      className="w-full py-5 mt-12 border-t"
      style={{
        backgroundColor: 'white',
        borderColor: '#e9ecef'
      }}
    >
      <div className="text-center">
        <h1 
          className="text-sm mb-2"
          style={{ color: '#6c757d' }}
        >
          © 2025
          <span 
            className="font-semibold mx-1"
            style={{ color: '#ff6b35' }}
          >
            Fernando Laprida
          </span>
          - Todos los derechos sin reservar
        </h1>
        <p 
          className="text-xs"
          style={{ color: '#adb5bd' }}
        >
          TaskManager - Sistema de gestión de tareas
        </p>
      </div>
    </footer>
  );
};