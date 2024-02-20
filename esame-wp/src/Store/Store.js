import { createStore, applyMiddleware, combineReducers} from "redux"
import {thunk } from "redux-thunk"
import Reducer from "../Reducers/Reducer"


const initialstate={
    posts:[]
}

const bigReducers= combineReducers({
    posts : Reducer
})

export const store = createStore(bigReducers,initialstate,applyMiddleware(thunk))