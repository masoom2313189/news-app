import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../firebase/setup.js";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      auth.currentUser && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-black h-screen text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold pt-14">News App</h1>
        <button
          onClick={googleSignin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-14 w-96 mt-14"
        >
          Sign In
        </button>
        <h4 className="text-blue-500 underline mt-7">Sign In Now</h4>
      </div>
    </section>
  );
};

export default Signin;
