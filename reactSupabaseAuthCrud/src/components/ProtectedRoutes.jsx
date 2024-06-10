import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/Auth";
import React from 'react'
// import { supabase } from "../supabase/client"

const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />


}
export default ProtectedRoutes;
