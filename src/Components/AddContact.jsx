import React, { useState } from 'react'
import '../App.css'

const AddContact = ({addContact}) => {
  const [contactData,setContactData] = useState({name:'',email:''})

  function handleContactData(e){
    if(e.target.name === 'name'){
        setContactData({...contactData,name:e.target.value})
    } else{
      setContactData({...contactData,email:e.target.value})
    }
  }

  function handleclick(){
      if(contactData.name==='' || contactData.email===''){
          alert('please fill eamty')
          return
      }

      addContact(contactData)
      setContactData({name:'',email:''})
  }
  return (
    <div className="add-contact-container">
      <div className="add-contact-title">Add Contact</div>
      <br />
      <form className="add-contact-form">
        <label className="add-contact-label">Name: </label>
        <input
          className="add-contact-input"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={contactData.name}
          onChange={handleContactData}
        />
        <br />
        <br />
        <label className="add-contact-label">Email: </label>
        <input
          className="add-contact-input"
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={contactData.email}
          onChange={handleContactData}
        />
      </form>
      <br />
      <button className="add-contact-button" onClick={handleclick}>
        Add Contact
      </button>
    </div>
  )
}

export default AddContact