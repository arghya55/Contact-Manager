import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css'

const ContactList = (props) => {
  const {contact,removecontact} = props
  const contactList = contact.map((val) => {
    return (
      <div className="contact-item" key={val.id}>
        <div className="contact-name">{val.data.name}</div>
        <div className="contact-email">{val.data.email}</div>
        <span className="delete-icon" onClick={() => removecontact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  return (
    <div className="contact-list-container">
      <h1 className="contact-list-title">Contact List</h1>
      <div className="contact-list">{contactList}</div>
    </div>
  );
}

export default ContactList