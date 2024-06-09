import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/Auth";
import React from 'react'
// import { supabase } from "../supabase/client"
    
const ProtectedRoutes = ({children}) => {
  const {user} = useAuth();

  if (!user) {
    return <Navigate  to= "/login" />;
  }
  return children?children:<Outlet/>
  
  
}
export default ProtectedRoutes;
// state = { isAuthenticated: false};
    
    // async componentDidMount() {
    //     // Verificar si el usuario está autenticado
    //     // const usuario = supabase.auth.getUser();
    //     const { data: { session } } = await supabase.auth.getSession();
    //     if (session) {
    //         this.setState({ isAuthenticated: true });
    //     }else{
    //         this.setState({ isAuthenticated: false });
        
    //     }
    // }
// import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { supabase } from "../supabase/client";

//     export const ProtectedRoutes = ({ children, redirectTo = "/login" }) => {
//       const [isAuthenticated, setIsAuthenticated] = useState(false);
//       const [loading, setLoading] = useState(true);

//       useEffect(() => {
//         const checkUser = async () => {
//           const { data: { session } } = await supabase.auth.getSession();
//           if (session) {
//             setIsAuthenticated(true);
//           } else {
//             setIsAuthenticated(false);
//           }
//           setLoading(false);
//         };

//         checkUser();

//         const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
//           if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
//             setIsAuthenticated(!!session);
//           }
//         });

//         // Cleanup subscription on unmount
//         return () => subscription?.unsubscribe();
//       }, []);

//       if (loading) {
//         // You can show a spinner or some kind of loading indicator while authentication is being checked
//         return <div>Loading...</div>;
//       }

//       if (!isAuthenticated) {
//         return <Navigate to={redirectTo} />;
//       }

//       return children ? children : <Outlet />;
//     };
   
    

// segundo intento
// import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { supabase } from "../supabase/client";

// export const ProtectedRoutes = ({ children, redirectTo = "/login" }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkUser = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (session) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//       }
//       setLoading(false);
//     };

//     checkUser();

//     const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
//       if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
//         setIsAuthenticated(!!session);
//       }
//     });

//     // Cleanup subscription on unmount
//     return () => subscription?.unsubscribe();
//   }, []);

//   if (loading) {
//     // Puedes mostrar un spinner o algún tipo de indicador de carga mientras se verifica la autenticación
//     return <div>Loading...</div>;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to={redirectTo} />;
//   }

//   return children ? children : <Outlet />;
// };
// ProtectedRoute.js
// import React, { useEffect, useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { supabase } from '../supabase/client';
// const ProtectedRoutes = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     const session = supabase.auth.session();
//     setIsAuthenticated(!!session);

//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       setIsAuthenticated(!!session);
//     });

//     return () => {
//       authListener.unsubscribe();
//     };
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>;
//   }

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoutes;
