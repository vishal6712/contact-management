import React,{useState} from "react";
import './ContactForm.css';
// import NewContact from "./NewContact"; 


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
            props.onSaveInformation(enteredData);
            console.log(enteredData);
            


            setEnteredFirstName('');
            setEnteredLastName('');
            setEnteredMobNumber('');
            setEnteredStatus('');
        };
    

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
                            <input type="text"  name="first-name" id="first-name" value={enteredFirstName} onChange={firstChangeHandler} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="last-name">Last Name: </label>
                            <input type="text" name="last-name" id="last-name" value={enteredLastName} onChange={lastChangeHandler}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mob-number">Mobile No.: </label>
                            <input type="number" name="mobile number" id="mob-number" value={enteredMobNumber} onChange={mobChangeHandler}/>
                        </div>
                        <div className="input-field" id="selects">
                            <label htmlFor="status" >Status:</label>
                            <select className="status-field" id="status" name="status" value={enteredStatus} onChange={statusChangeHandler}>
                                <option value={'select'}>Select</option>
                                <option value={"active"}>Active</option>
                                <option value={"inactive"}>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="new-data__actions">
                        <button type="submit" id="submit-action" >Add Contact</button>
                    </div>
                </form>

                {/* <div className="content" dangerouslySetInnerHTML={{__html: firstName}}></div> */}
            </div>
        </div>
    );
};

export default ContactForm;