import React from "react";
import Model from "./Model";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdateContact = ({
  isUpdate,
  onClose,
  isOpen,
  name,
  email,
  id,
}) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("contact added successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("contact updated successfully");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Model onClose={onClose} isOpen={isOpen}>
          <Formik
            validationSchema={contactSchemaValidation}
            initialValues={
              isUpdate
                ? {
                    name: name,
                    email: email,
                  }
                : {
                    name: "",
                    email: "",
                  }
            }
            onSubmit={(values) => {
              console.log(values);
              isUpdate ? updateContact(values, id) : addContact(values);
            }}
          >
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <Field name="name" className="border h-10" />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <Field name="email" className="border h-10" />
                <div className="text-red-500 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <button className="bg-orange-300 py-1.5 px-3 border cursor-pointer self-end">
                {isUpdate ? "Update" : "Add"} Contacts
              </button>
            </Form>
          </Formik>
        </Model>
      </div>
    </>
  );
};

export default AddAndUpdateContact;
