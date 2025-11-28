import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes.jsx";
import { PrivateRoutes } from "./PrivateRoutes.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register.jsx";
import { Profile } from "../pages/Profile.jsx";
import { Home } from "../pages/Home.jsx";
import { Tasks } from "../pages/Tasks.jsx";
import {CreateTasks} from "../pages/CreateTasks.jsx"
import { UpdateTasks } from "../pages/UpdateTasks.jsx";
import { DeleteTasks } from "../pages/DeleteTasks.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="" element={<Navigate to="/Login" />} />
        <Route path="/" element={<Navigate to="/Login" />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/CreatedTasks" element={<CreateTasks />} />
        <Route path="/PutTasks" element={<UpdateTasks />} />
        <Route path="/DeletedTasks" element={<DeleteTasks />} />
        <Route path="" element={<Navigate to="/Home" />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Route>
    </Routes>
  );
};