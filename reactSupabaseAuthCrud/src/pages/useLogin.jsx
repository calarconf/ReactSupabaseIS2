import { useState } from "react";
import { supabase } from "../supabase/client";

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debe aceptar los términos y condiciones para continuar.");
      return;
    }
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        throw new Error(error.message);
      }
      alert("Se ha enviado el correo, revise su bandeja de entrada.");
    } catch (error) {
      alert("Ocurrió un error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
    setShowTerms(e.target.checked);
  };

  return {
    email,
    setEmail,
    termsAccepted,
    showTerms,
    error,
    handleSubmit,
    handleCheckboxChange,
  };
};

export default useLogin;
