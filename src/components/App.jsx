import { nanoid } from 'nanoid'

import  ContactForm  from "./ContactForm/ContactForm"
import  {ContactList}   from "./ContactList/ContactList"
import  {Filter}  from "./Filter/Filter"


import Box from "./Box/Box"
import { useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from 'redux/Filter/fllter.slice'
import { contactsAddActions, contactsDeleteActions } from 'redux/Contacts/contacts.slice'





const  App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // })
  const dispatch = useDispatch()
  const contacts = useSelector(state => {
    console.log(state, 'ff')
    return state.contacts
  })
  const filter = useSelector(state => {
console.log(state.filter, 'sss')
return state.filter
  } )
  // console.log(contacts, 'bbb')

  
  const addNameForm = (data) => {
    console.log(data);
        const filterByName = contacts.some(el => el.name === data.name)
        if(filterByName){
              alert(`${data.name} is already in contacts`);
            }
    
        else{
          const itemName = {
            id: nanoid(),
            ...data,
            
          }
          
          dispatch(contactsAddActions(itemName))
        }
    }
  
    const handleFilter = (e) => {
      dispatch(filterActions(e.target.value))
}
    
    const handleSearchInput = useMemo(() => {
      console.log(contacts, 'aaaa')
      return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }, [contacts, filter])

    
    const handleDeleteContact = (contactId) => {
  console.log(contactId);
  dispatch(contactsDeleteActions(contactId))
}

// useEffect(() => {
//   window.localStorage.setItem('contacts', JSON.stringify(contacts))
// }, [contacts])
    

    

    return (
      <>
      <Box as="section" display="flex" justifyContent="center" flexDirection="column" alignItems="center" border='2px solid black' width="50%" borderRadius="10px" p={16} backgroundColor='#609'>
      <h1>Name</h1>
      <ContactForm  onSubmit={addNameForm} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onChange={handleFilter}/>
      <ContactList itemName={handleSearchInput} onClickDelete={handleDeleteContact}/>
      </Box>
      </>
    )
};

export default App;




  
  
  
  
























// const  App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? []
//   })
//   const [filter, setFilter] = useState('')
  
//   const addNameForm = (data) => {
//     console.log(data);
//         const filterByName = contacts.some(el => el.name === data.name)
//         if(filterByName){
//               alert(`${data.name} is already in contacts`);
//             }
    
//         else{
//           const itemName = {
//             id: nanoid(),
//             ...data,
            
//           }
          
//           setContacts(prevState => [itemName, ...prevState])
//         }
//     }
  
//     const handleFilter = (e) => {
//       setFilter(e.target.value)
// }
    
//     const handleSearchInput = useMemo(() => {
//       return contacts.filter((contact) => 
//       contact.name.toLowerCase().includes(filter.toLowerCase()))
//     }, [contacts, filter])

    
//     const handleDeleteContact = (contactId) => {
//   console.log(contactId);
//   setContacts(prevState => prevState.filter((item) => item.id !== contactId))
// }

// useEffect(() => {
//   window.localStorage.setItem('contacts', JSON.stringify(contacts))
// }, [contacts])
    

    

//     return (
//       <>
//       <Box as="section" display="flex" justifyContent="center" flexDirection="column" alignItems="center" border='2px solid black' width="50%" borderRadius="10px" p={16} backgroundColor='#609'>
//       <h1>Name</h1>
//       <ContactForm  onSubmit={addNameForm} />
//       <h2>Contacts</h2>
//       <Filter filterValue={filter} onChange={handleFilter}/>
//       <ContactList itemName={handleSearchInput} onClickDelete={handleDeleteContact}/>
//       </Box>
//       </>
//     )
// };

// export default App;



