import {combineReducers, createStore} from "redux";

import { messagesReduser } from "./reducers/messagesReduser/messagesReduser";
import { chatsReducers } from "./reducers/chatsReducers/chatsReducers";

export const store = createStore(combineReducers({
    chats: chatsReducers,
    messeges: messagesReduser
}))