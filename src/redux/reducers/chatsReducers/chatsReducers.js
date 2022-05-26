
const initialState = {
    chats: [
        {
            id: 1,
            name: 'Apple'
        },
        {
            id: 2,
            name: 'Orange'
        }
    ]
}

export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}