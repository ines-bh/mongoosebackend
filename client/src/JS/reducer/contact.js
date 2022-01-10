import { DELETE_CONTACT_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCC } from "../actionstype/contact";

const initState={
    listContacts:[],
    load:false,
    errors:null,
    edit:false,
    contact:{},
    msg:""
}

export const contactReducer=(state=initState,{type,payload})=>{

    switch (type) {
        case GET_CONTACTS_LOAD:return{...state,load:true}
        case GET_CONTACTS_SUCC:return{...state,load:false,listContacts:payload}
        case GET_CONTACTS_FAIL:return{...state,load:false,errors:payload}

        case DELETE_CONTACT_FAIL:return{...state,errors:payload}

        case ADD_CONTACTS_FAIL:return{...state,errors:payload}

        case EDIT_CONTACTS_FAIL:return{...state,msg:payload}

        case TOGGLE_TRUE:return{...state,edit:true}
        case TOGGLE_FALSE:return{...state,edit:false}

        case GET_CONTACT_LOAD:return{...state,load:true}
        case GET_CONTACT_SUCC:return{...state,load:false,contact:payload}
        case GET_CONTACT_FAIL:return{...state,load:false,errors:payload}

        default: return state
            
                   
    }
}

export default contactReducer