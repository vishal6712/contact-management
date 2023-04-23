import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Contacts";
import ChartsAndMaps from "./pages/ChartsAndMaps";
// import NewContact from "./components/NewContact/NewContact";
import ContactForm from "./components/ContactForm";
import NewContact from "./components/NewContact";


let DUMMY_INFORMATION=[
  {
    id:'1',
    first:'Vishal',
    last:'Kadam',
    mob:8600843351,
    status:'Active',
  },
  {
    id:'2',
    first:'Shivaji',
    last:'Suryavanshi',
    mob:9561000802,
    status:'Active',
  },
  {
    id:'3',
    first:'Minakshi',
    last:'Kadam',
    mob:8600843351,
    status:'Inactive',
  },

];

const App=(props)=>
{

  const [Information,setInformation]=useState(DUMMY_INFORMATION);

  const addInformationHandler=(newInformation)=>{

    const updatedInformation=[...Information,newInformation];
    setInformation(updatedInformation);
  };

  

  return(
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/contacts" element={<Contacts onSaveInformation={addInformationHandler} />}/>
            <Route path="/chartsAndMaps" element={<ChartsAndMaps/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
      
      {/* <NewContact onAddInformation={addInformationHandler}/> */}
      
    </div>
  );

};

export default App; 