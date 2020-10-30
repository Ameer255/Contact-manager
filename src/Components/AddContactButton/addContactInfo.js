import React from "react";
import useEffect from "react";
import DisplayContact from "../DisplayContacts/displayContact"



function AddContact() {


  let [view, setView] = React.useState(false);
  let [name, setName] = React.useState("");
  let [number, setNumber] = React.useState();
  let [list, setList] = React.useState([]);

 
  function handleClick(){
    view ? setView(false) : setView(true);
  }
 


  function changeName(e){

    setName(e.target.value);
  }
  function changeNumber(e){

    setNumber(e.target.value);
  }

  

 
 
  list = (JSON.parse(localStorage.getItem("contacts")));

  function updateList(newList){
    setList(newList);
  }
  
  

  function save(event) {
    event.preventDefault();
    setName(event.target.elements.name.value);
    setNumber(event.target.elements.contactNum.value);
    setList = (JSON.parse(localStorage.getItem("contacts")));

    

    let newContact = {nam : name, num : number};


    if(list){

      list.push(newContact);
      localStorage.setItem("contacts", JSON.stringify(list));
      
    }
    else{
      
      localStorage.setItem("contacts", JSON.stringify([newContact]));
    }
  setView(false);
  }
 

  return (
    <>
       

      <div className="container-info">

  <button className="add-contact" onClick={handleClick}>{view ? "Cancel" : "Add Contact"}</button>

  { view ? 
       
       <div className="contact-form">
            <form onSubmit={save}>
              <label htmlFor="name"> Enter Name </label>
              <input type="text"
               id="name" 
               onChange={changeName}
                placeholder="Name" 
                required="required"
                />
                <br />
              
              <label htmlFor="contactNum"> Enter Contact </label>
              <input
                type="number"
                id="contactNum"
                onChange={changeNumber}
                placeholder="Contact Number"
                required="required"
              /> <br />

              <div className="save">
              <button  type="submit"> Save </button>
              </div>

            </form>
        </div> : " " }

        <div className="contact-list-container">

        <DisplayContact list={list} updateList={updateList}/>

        </div>

      </div>
    </>
  );

}

export default AddContact;








     

  
      

