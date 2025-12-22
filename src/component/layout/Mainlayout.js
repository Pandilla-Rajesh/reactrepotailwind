import React, { useRef, useState, useEffect } from "react";
import { Header } from "../common/Header";
import { Outlet } from "react-router-dom"

const Mainlayout = () => {

  const headerRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if(headerRef.current) {
      setOffset(headerRef.current.offsetHeight)
    }
  }, [])

  return (
    <div className="main-class">
      <header>
        <Header ref={ headerRef } />
      </header>
      <main style={ { paddingTop: '75px' } }>
        <Outlet />
      </main>
    </div>
  );
};

export default Mainlayout;
