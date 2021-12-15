const initState = [
    {
        id:1,
        name: 'vinh hoang',
        number: 123456789,
        email:'vinhhoang@gmail.com'
    },
    {
        id:2,
        name: 'hoang vinh',
        number: 987654321,
        email:'hoangvinh@gmail.com'
    }
];

const contactReducer = (state = initState, action) => {
    switch(action.type)  {
        case'ADD_CONTACT':
            state = [...state,action.payload];
            return state;
        case'UPDATE_CONTACT':
            const updateContact = state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            state = updateContact;
            return state
        case'DELETE_CONTACT':
            const filterContact = state.filter((contact) => contact.id !== action.payload  )
            state = filterContact 
            return state
        default:
            return state;
    }
}; 

export default contactReducer;