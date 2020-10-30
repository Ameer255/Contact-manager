import React from "react";

function DisplayContact(props){

    let list = props.list;


    const deleteItem = (key) =>{

        let contacts = [...list].filter((contact, index) => index !== key);
        props.updateList(contacts);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        
    
      }


    return (
        <div className="contact-list-container">
        
        {list && list[0]!==undefined? list.map((el, index) =>{
          return (
          <li key={index}>
            <div className="contact-item">
           <strong>{el.nam}</strong><br></br>
           <strong> {el.num} </strong>
           </div>
           <div>
            <button className="delete" onClick={() => deleteItem(index)}>Delete</button>
            </div>

          </li>
          )
        }) : <div className="no-contacts"> <h3>Empty, Please add some contacts</h3> </div>}

        </div>
    )
}

export default DisplayContact;