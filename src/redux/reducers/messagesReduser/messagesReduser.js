

import { DELETE_MESSEGES, ADD_MESSEGES } from "../../actions/actionTypes"

const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            title: 'hi'
        },
        {
            id: 2,
            chatId: 2,
            title: 'Hi, how are you?'
        },
        {
            id: 3,
            chatId: 1,
            title: 'OK, how are you?'
        },
        {
            id: 4,
            chatId: 2,
            title: 'Good'
        },
        {
            id: 5,
            chatId: 2,
            title: 'bye'
        },
    ]
}


export const messagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSEGES:
            return {
                ...state, 
                messages: state.messages.filter(item => item.id !== action.payload)
            }
        case ADD_MESSEGES:
            return {
                ...state, 
                messages: [...state.messages, action.payload]
            }

        default: 
            return state
    }
}