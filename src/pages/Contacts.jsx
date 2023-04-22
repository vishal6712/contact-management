import React from "react";

const Contacts = () =>
{
    return(
        <div>
            <div className="page_name">
                <h1 >Contacts</h1>
            </div>
            <form>
                <div>
                    <div className="input-field">
                        <label htmlFor="first-name" >First Name</label>
                        <input type="text"  name="first-name" id="first-name" required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="mob-number">Mobile Number</label>
                        <input type="number" name="mobile number" id="mob-number" required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="status" >Status</label>
                        <select className="status-field" id="status" name="status">
                            <option value={'active'}>Active</option>
                            <option value={"inactive"}>Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" >Add Expense</button>
                </div>
            </form>
        </div>
    );
};

export default Contacts;