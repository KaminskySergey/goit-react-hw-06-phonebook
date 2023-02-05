import { createSlice } from "@reduxjs/toolkit"
import { initContacts } from "./init-reducer-state";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initContacts,
    reducers: {
        contactsAddActions: (state, {payload}) => {
            return [payload, ...state]
        },
        contactsDeleteActions: (state, {payload}) => {
            return state.filter((user) => user.id !== payload)
        },
    }    
})

export const contactsReducer = contactsSlice.reducer;
console.log(contactsReducer, 'gggggggggg');
export const {contactsAddActions, contactsDeleteActions} = contactsSlice.actions