import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";

const Contacts = (props) =>
{
    const saveInformationDataHandler = (enteredInformation) =>
    {

       props.onAddInformation(enteredInformation);
            // console.log(enteredInformation);

    };

    return(
        <div>
            <ContactForm onSaveInformation={saveInformationDataHandler} />
            {props.allData.map(coveredData=>(   //looping over new and old array
                <ContactInformation
                    first={coveredData.first}
                    last={coveredData.last}
                    mob={coveredData.mob}
                    status={coveredData.status}
                />
            ))}
        </div>
    );
};

export default Contacts;