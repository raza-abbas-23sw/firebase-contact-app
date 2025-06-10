import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import NotFound from './components/NotFound'
import ContactCard from './components/ContactCard'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from './config/firebase'

const App = () => {
  const [contacts, setcontacts] = useState([])
  useEffect(()=>{

    const getContacts = async ()=>{
      try {
        const contactsRef= collection(db, "contacts")
        const contactsSnapShot =await getDocs(contactsRef)
        const conatList= contactsSnapShot.docs.map((doc)=>{
          return {
            id : doc.id,
            ...doc.data()
          }
        })
        console.log(conatList[0].name);
        
      setcontacts(conatList)        
      } catch (error) {
        
      }
    }

    getContacts()

  },[])
  return (
    <>
      <main className='bg-gray-800 px-5 py-3 relative h-screen'>
      <Header/>
      <SearchBar/>
      {/* <NotFound/> */}
      {
        contacts.map((contact)=>{
          return <ContactCard name={contact.name} email={contact.email} key={contact.id}/>
        })
      }
      </main>
    </>
  )
}

export default App