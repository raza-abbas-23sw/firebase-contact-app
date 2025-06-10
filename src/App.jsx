import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NotFound from "./components/NotFound";
import ContactCard from "./components/ContactCard";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclousre from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const { onClose, onOpen, isOpen } = useDisclousre();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactLists);
          return contactLists;
        });

        setcontacts(conatList);
      } catch (error) {}
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    console.log(value);

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContact = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setcontacts(filteredContact);
      return filteredContact;
    });
  };

  return (
    <>
      <main className="bg-gray-800 px-5 py-3 relative  max-w-[400px] mx-auto md:mt-5">
        <Header />
        <SearchBar onAddClick={onOpen} onSearch={filterContacts} />
        {contacts.length == 0 && <NotFound />}
        {console.log(contacts)}
        {contacts.map((contact) => {
          return (
            <ContactCard
              name={contact.name}
              email={contact.email}
              id={contact.id}
              key={contact.id}
            />
          );
        })}
      </main>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
