import React,{useEffect, useState} from "react";
import './ContactForm.css'; 

const ContactForm = (props) =>
{

        const [enteredFirstName,setEnteredFirstName]=useState('');
        const [enteredLastName,setEnteredLastName]=useState('');
        const [enteredMobNumber,setEnteredMobNumber]=useState('');
        const [enteredStatus,setEnteredStatus]=useState('');

        const firstChangeHandler = (event) =>
        {
            setEnteredFirstName(event.target.value);
        };
        const lastChangeHandler = (event) =>
        {
            setEnteredLastName(event.target.value);
        };
        const mobChangeHandler = (event) =>
        {
            setEnteredMobNumber(event.target.value);
        };
        const statusChangeHandler = (event) =>
        {
            setEnteredStatus(event.target.value);
        };
        const submitHandler=(event)=>
        {
            event.preventDefault();

            var enteredData={
                first:enteredFirstName,
                last:enteredLastName,
                mob:enteredMobNumber,
                status:enteredStatus,

            };
            console.log(enteredData);
            // let serialisedData=JSON.stringify(enteredData);
            // let getLocalEnteredData=JSON.parse(localStorage.getItem("inputValues"));
            props.onSaveInformation(enteredData);

    

            setEnteredFirstName('');
            setEnteredLastName('');
            setEnteredMobNumber('');
            setEnteredStatus('');
        };

        // useEffect(()=>
        //     {
        //         const formData=localStorage.getItem("inputValues");
        //         props.onSaveInformation(JSON.parse(formData));
        //     },[])

        // useEffect(()=>
        //     {
        //         localStorage.setItem("inputValues",JSON.stringify(enteredData));
        //     },[enteredData])
    

    return(
        <div id="outer-card">
            <div className="page_name">
                <h1 >Contacts</h1>
            </div>
            <div className="Information-form">
                <form onSubmit={submitHandler} id="input-form">
                    <div id="inputs">
                        <div className="input-field">
                            <label htmlFor="first-name" >First Name: </label>
                            <input type="text"  name="first-name" id="first-name" value={enteredFirstName} onChange={firstChangeHandler} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="last-name">Last Name: </label>
                            <input type="text" name="last-name" id="last-name" value={enteredLastName} onChange={lastChangeHandler} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mob-number">Mobile No.: </label>
                            <input type="number" name="mobile number" id="mob-number" value={enteredMobNumber} onChange={mobChangeHandler} required/>
                        </div>
                        <div className="input-field" id="selects">
                            <label htmlFor="status" >Status:</label>
                            <select className="status-field" id="status" name="status" value={enteredStatus} onChange={statusChangeHandler}>
                                <option value={'select'}>Select</option>
                                <option value={"Active"}>Active</option>
                                <option value={"Inactive"}>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="new-data__actions">
                        <button type="submit" id="submit-action" >Add Contact</button>
                    </div>
                </form>
                
                
            </div>
            
        </div>
    );
};

export default ContactForm;