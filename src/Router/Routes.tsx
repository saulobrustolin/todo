import { Routes, Route, Navigate } from "react-router";
import AppLayout from "../layout/app-layout";
import ProtectedRoute from "../middleware/auth";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import New from "../pages/new";

function Router() {
  const routes = [
    { path: "/login", element: <Login />, layout: false, isProtected: false },
    { path: "/register", element: <Register />, layout: false, isProtected: false },
    { path: "/dashboard", element: <Dashboard />, layout: true, isProtected: true },
    { path: "/new", element: <New />, layout: true, isProtected: true },
  ];

  return (
    <Routes>
      {
        routes.map(({ path, element, layout, isProtected }) => {
          let el = element;

          if (isProtected) {
            el = <ProtectedRoute>{el}</ProtectedRoute>;
          }

          if (layout) {
            el = <AppLayout>{el}</AppLayout>;
          }
          return (
            <Route 
              element={el}
              key={path}
              path={path}
            />
          )
        })
      }
      <Route 
        path="*" 
        element={
        <Navigate to='/dashboard' replace />
      } />
    </Routes>
  );
}

export default Router;