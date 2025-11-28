import { Navigate, Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Profile } from "../pages/Profile";
import { Tasks } from "../pages/Tasks";
import { CreateTask } from "../pages/CreateTask";

export const AppRouter = ({ authStatus }) => {
  return (
    <Routes>
      <Route element={<PublicRoute authPublic={authStatus} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoute authPrivate={authStatus} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/createTask" element={<CreateTask />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};