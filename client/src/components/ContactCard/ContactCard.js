import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import avatar from "../../asset/avatar.png";
import editBtn from "../../asset/edit.png";
import deleteBtn from "../../asset/delete.png";

import "./ContactCard.css";
import { deleteContact, getContact, toggleTrue } from "../../JS/actions/contact";

const ContactCard = (contact) => {

const dispatch = useDispatch()

  return (
    <div className="contactcard">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>{contact.name}</h2>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
      <div className="deleteeditbtn">
        <img src={deleteBtn} 
        onClick={()=>dispatch(deleteContact(contact._id))}
        alt="delete-icon" />
      
      <Link to={`/editContact/${contact._id}`}>
        <img src={editBtn} 
        onClick={()=>dispatch(toggleTrue()),dispatch(getContact(contact._id))}
        alt="edit-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
