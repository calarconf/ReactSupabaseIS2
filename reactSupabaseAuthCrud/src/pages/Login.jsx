import { useEffect, useState } from "react";
// import React from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Login() {

  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await supabase.auth.signInWithOtp({
        email,
      })
      // console.log(result);
    } catch (error) {
      console.log(error);

    };
  };

  // useEffect(() =>{
  //   if(supabase.auth.user()){
  //     navigate('/');
  //   }

  // }, [navigate])

  return (
    <>
      <Navbar />
      <div className="row pt-5">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit} className="card card-body">
            <input
              type="email"
              name="email"
              placeholder="youremail@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-2"
            />
            <button className="btn btn-primary">
              Empezar a recolectar
            </button>
          </form>
        </div>
      </div>
    </>

  );
}

export default Login;