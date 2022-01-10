import axios from "axios";
import { type } from "express/lib/response";
import {
  ADD_CONTACTS_SUCC,
  DELETE_CONTACT,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCC,
  EDIT_CONTACTS_SUCC,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../actionstype/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contacts/");
    console.log(result);
    dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.listcontacts });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${contactId}`);
    dispatch({ type: DELETE_CONTACT_SUCC });
    dispatch(getContacts());
  } catch (error) {

    dispatch({type:DELETE_CONTACT_FAIL, payload:error.response.data})
  }
};
export const addContact=(newContact)=> async (dispatch)=>{
  try {

    await axios.post('/api/contacts/',newContact)
    dispatch({type: ADD_CONTACTS_SUCC})
    dispatch(getContacts())

  } catch (error) {
    dispatch({type:ADD_CONTACT_FAIL, payload:error.response.data})
  }
}

export const toggleTrue=()=>{
  return{
    type: TOGGLE_TRUE
  }
}

export const toggleFalse=()=>{
  return{
    type: TOGGLE_FALSE
  }
}

export const getContact= (contactId) => async(dispatch)=>{
  dispatch({type:GET_CONTACT_LOAD})
  try {
    let result= await axios.get(`/api/contacts/${contactId}`)
    dispatch({type:GET_CONTACT_SUCC, payload:result.data.contactToFind})
  } catch (error) {
    dispatch({type:GET_CONTACT_FAIL, payload:error.response.data})
    
  }
}

export const editContact=(contactId, newContact)=> async(dispatch)=>{
try {
  await axios.put(`/api/contacts/${contactId}`,newContact)
  dispatch({type:EDIT_CONTACTS_SUCC})
  dispatch(getContacts())

} catch (error) {
  dispatch({type:EDIT_CONTACT_FAIL, payload:error.response.data})
}
}