import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { useDispatch,useSelector} from "react-redux";
import { Link } from "react-router-dom";
import addBtn from "../../asset/add.png";
import { addContact } from "../../JS/actions/contact";
import editBtn from "../../asset/edit.png"

import "./AddEditContact.css";

const AddEditContact = () => {

  const [contact, setContact] = useState({name:"",email:"",phone:""})


   const edit = useSelector(state => state.contactReducer.edit)
   const contactRed = useSelector(state => state.contactReducer.contact)
  const dispatch = useDispatch()

  useEffect(() => {
    edit? setContact(contactRed):setContact({name:"",email:"",phone:""})
   
  }, [edit,contactRed])

  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="enter contact name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            // onChange={(e)=>setContact({...contact, name: e.target.value})}
          ></Form.Control>
          <Form.Text className="text-muted">Name is required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="enter contact e mail"
            name="email"
            value={contact.email}
            onChange={handleChange}
          ></Form.Control>
          <Form.Text className="text-muted">email is required</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="enter contact phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {edit?
      <Link to='/'>
      <img src={editBtn} alt="edit" className="editBtn"
      onClick={()=>dispatch(editContact(contact._id,contact))}
      />
      </Link>
      :
      <Link to='/'>
        <img src={addBtn} alt="add" className="editBtn" 
        onClick={()=>dispatch(addContact(contact))}
        />
        </Link>
      }

      </Form>
    </div>
  );
};

export default AddEditContact;
