import React from "react";
import './ContactInformation.css';
import { Link } from "react-router-dom";

const ContactInformation = (props) =>
{
    
    return(
        <div className="card">
            <div>
                <div id="image"><img id="contact-img" src="https://www.freeiconspng.com/uploads/go-back--gallery-for--contact-person-icon-png-21.png" alt="photo" /></div>
                <div className="text">
                    <p>First Name : {props.first}</p>
                    <p>Last Name : {props.last}</p>
                    <p>Mobile Number : {props.mob}</p>
                    <p>Status : {props.status}</p>
                </div>
            
                <Link to={`${props.first}`}>
                    <button className="edit-buttons">
                        Edit
                    </button>
                </Link>
                <button className="delete-buttons">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ContactInformation;