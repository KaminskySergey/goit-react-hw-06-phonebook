

// import { createReducer } from "@reduxjs/toolkit";
// import { contactsAddActions, contactsDeleteActions } from "./contacts.actions";
// import { initContacts } from "./init-reducer-state";




// export const contactsReducer = createReducer(initContacts, builder => {
//     builder.addCase(contactsAddActions, (state, {payload}) => {
//         return [payload, ...state]
//     })
//     .addCase(contactsDeleteActions, (state, {payload}) => {
//         return state.filter((user) => user.id !== payload)
//     })
// })