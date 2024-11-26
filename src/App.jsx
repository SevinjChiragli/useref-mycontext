import { createContext } from "react";
import "./App.css";
import Footer from "./copmponents/Footer";
import Header from "./copmponents/Header";
import Main from "./copmponents/Main";
import React, { useState } from "react";

export const MyContext = createContext();
function App() {
  let [searchValue,setSearchValue]=useState('')
  return (
    <>
      <MyContext.Provider value={{searchValue,setSearchValue}}>
        <Header />
        <Main />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
