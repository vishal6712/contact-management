import React, { useState } from "react";
import './Sidebar.css'
import { NavLink } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Sidebar = ({children})=>
{
    // const[isOpen,setIsopen]=useState(false);
    // const toggle = () =>setIsopen(!isOpen);
    const menuItems=[
        {
            path:"/",
            name:"Dashboard",
            icon:<d/>
        },
        {
            path:"/contacts",
            name:"contacts",
            icon:<d/>
        },
        {
            path:"/chartsAndMaps",
            name:"Chart And Maps",
            icon:<d/>
        },
    ]

    return(
        <div className="container">
            <div  className="sidebar">
                <div className="top_section">
                    <h1  className="logo">Logo</h1>
                    <div className="bars">
                        
                    </div>
                    
                </div>
                {
                    menuItems.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink> 
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;