import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";

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
    <div className="codec-profile-container">
      {/* marco externo */}
      <div className="codec-profile-card">
        <h1 className="codec-profile-title">PROFILE DATA</h1>

        <div className="codec-profile-section">
          <span className="codec-label">ID</span>
          <span className="codec-value">{user.id}</span>
        </div>

        <div className="codec-profile-section">
          <span className="codec-label">NAME</span>
          <span className="codec-value">{user.name}</span>
        </div>

        <div className="codec-profile-section">
          <span className="codec-label">LASTNAME</span>
          <span className="codec-value">{user.lastname}</span>
        </div>

        {/* línea inferior HUD */}
        <div className="codec-profile-footer">CODEC LINK ACTIVE</div>

        {/* scanlines */}
        <div className="codec-scanlines"></div>
      </div>
    </div>
  );
};