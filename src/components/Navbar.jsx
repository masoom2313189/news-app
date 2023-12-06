import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="bg-black text-white flex justify-between p-5 sticky top-0">
      <h1 className="text-3xl md:text-4xl font-semibold">News</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.setSearch(e.target.value)}
        className="bg-black px-2 text-white"
      />
      {auth.currentUser ? (
        <button onClick={logout} className="py-1 px-3 bg-red-700 font-semibold">
          Logout
        </button>
      ) : (
        <Link to="/signin">
          <button className="py-1 px-3 bg-green-700 font-semibold">
            Sign in
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
