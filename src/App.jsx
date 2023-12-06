import React from "react";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
