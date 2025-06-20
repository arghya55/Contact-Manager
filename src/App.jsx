import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import uuid4 from 'uuid4'
import './App.css'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App = () => {
    const localStorageKey= 'contact'
  const [Contact,setConatct]= useState(()=>{
   return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})



  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(Contact))
  },[Contact])

  const addContact =(data)=>{
    setConatct([...Contact,{id:uuid4(),data}])
  }

  function removecontact(id){
    const updatedlist= Contact.filter((val)=>{
      return val.id !== id
    })
    setConatct(updatedlist)
  }
  return (
    <div>
      <Header/>
      <AddContact addContact={addContact}/>
      <ContactList contact={Contact} removecontact={removecontact}/>
    </div>
  )
}

export default App