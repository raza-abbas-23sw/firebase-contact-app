import React, { useState } from "react";
import userIcon from "../assets/ph_user-circle-thin.png";
import editIcon from "../assets/mdi_circle-edit-outline.png";
import trashIcon from "../assets/mdi_trash-can-empty.png";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import Model from "./Model";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclousre from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ name, email, id }) => {
  const { onClose, onOpen, isOpen } = useDisclousre();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-amber-300 flex items-center justify-between rounded py-2 mt-2">
        <div className="flex items-center gap-2 ">
          <button>
            <img src={userIcon} alt="" />
          </button>
          <div>
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <button onClick={onOpen} className="cursor-pointer">
            <img src={editIcon} alt="" />
          </button>

          <button onClick={() => deleteContact(id)} className="cursor-pointer">
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </div>
      <AddAndUpdateContact
        isUpdate
        onClose={onClose}
        isOpen={isOpen}
        name={name}
        email={email}
        id={id}
      />
    </>
  );
};

export default ContactCard;
