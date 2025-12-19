import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import DataReduxUse from "./Day1/DataReduxUse";
// import DataRedux from './Day2/DataRedux'
import Home from "./component/features/Home/Home";
import Aboutus from "./component/features/Aboutus/Aboutus";
import Services from "./component/features/Services/Services";
import Contact from "./component/features/Contact/Contact";
import { Labs } from "./component/features/Labs/Labs";
import Mainlayout from "./component/layout/Mainlayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  // const dispatch=useDispatch();
  // const storeObj= useSelector((store)=>{
  //   return store;
  // });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/Aboutus" element={<Aboutus/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Labs" element={<Labs/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>{storeObj?.score}</h1>
      <button className="btn btn-primary" onClick={()=>{
        dispatch=({type:"increment", value:1})
      }}>Increment</button>
      <Redux1/>
      <DataRedux/> */}
    </div>
  );
};

// function App() {
//   const dispatch=useDispatch();
//  const storeObj= useSelector((store)=>{
// return store;
//  });
//   return (
//     <div className="App">
//       <h1>{storeObj?.score}</h1>
//     <button onClick={()=>{
// dispatch({type:"increment",value:1})
//     }}>Increment</button>
//    <DataRedux/>
//    <DataReduxUse/>
//     </div>
//   );
// }

export default App;
