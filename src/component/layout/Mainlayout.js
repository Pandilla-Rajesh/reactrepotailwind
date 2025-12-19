import React from "react";
import {Header} from "../common/Header";
import {Outlet} from "react-router-dom"

const Mainlayout = () => {
  return (
    <div className="main-class">
      <header>
        <Header />
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Mainlayout;
