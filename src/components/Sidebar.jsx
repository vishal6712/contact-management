import React from "react";
import './Sidebar.css';
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fontwesome/react-fontawesome";
import {FaRegChartBar, FaUserAlt,} from "react-icons/fa";


const Sidebar = ({children})=>
{


   
    const menuItems=[
        {
            path:"/Contacts",
            name:"Contacts",
            icon:<FaUserAlt/>
        },
        {
            path:"/ChartsAndMaps",
            name:"Chart And Maps",
            icon:<FaRegChartBar/>
        },
    ]

    return(
        <>
            <div className="container">
                <div  className="sidebar">
                    <div className="top_section">
                        <h1  className="logo">Contact Managment App</h1>
                        
                        
                    </div>
                    {
                        menuItems.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text" id="linktext">{item.name}</div>
                            </NavLink> 
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Sidebar;