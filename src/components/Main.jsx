import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Home search={search} />
    </>
  );
};

export default Main;
