var tabcontact= [

    { _id:1,
      name:'mohamed',
      phone:'24391838',
      email:'mohamedmbarki75@gmail.com'
    },
    { _id:2,
        name:'nidhal',
        phone:'20121212',
        email:'nidhal10@hotmail.com'
      }

]

const contactReducer=(state=tabcontact,action)=>
{
    switch(action.type)
    {
        case 'ADD-CONTACT':
        return(
        state.concat(action.newcontact)
        )

        case 'EDIT-CONTACT':
        return (
        state.map(el=>(el._id == action.editcontact._id) ? el=action.editcontact : el)
        )

        case 'DELETE_CONTACT':
        return (
            state.filter((el,index)=>el._id!==action._id)
        )

        case 'UPDATE_CONTACTS':
        return (
           state=action.contacts
        )

       default :
      return state
    }

}

export default contactReducer