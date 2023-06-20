import { Routes, Route, Navigate } from "react-router-dom";

//pages
import { Dashboard } from "./pages";

export const Router = () => {
  return (
    <Routes>
      {/*       <Route path="/login" element={<Login />} />
       */}{" "}
      <Route path="/prediction" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/prediction" replace />} />
      <Route path="*" element={<Navigate to="/prediction" replace />} />
    </Routes>
  );
};
