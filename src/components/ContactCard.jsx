import React from "react";
import userIcon from "../assets/ph_user-circle-thin.png";
import editIcon from "../assets/mdi_circle-edit-outline.png";
import trashIcon from "../assets/mdi_trash-can-empty.png";
const ContactCard = ({ name, email }) => {
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
          <button>
            <img src={editIcon} alt="" />
          </button>
          <button>
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
