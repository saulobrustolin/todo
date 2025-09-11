import { createContext } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  const context = createContext(isAuthenticated);

  return (
    <context.Provider value={isAuthenticated}>{children}</context.Provider>
  );
}

export default ProtectedRoute;
