import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import ChartsAndMaps from "./pages/ChartsAndMaps";

const App=()=>
{

  return(
    <div>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/chartsAndMaps" element={<ChartsAndMaps/>}/>
        </Routes>
      </Sidebar>
      </BrowserRouter>
    </div>
  );

};

export default App; 