import {legacy_createStore} from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux"
import {thunk} from "redux-thunk"
import { todoreducer } from "./Todo/todoreducer";

const rootreducer = combineReducers({
    todo:todoreducer
})


export const store  = legacy_createStore(rootreducer,applyMiddleware(thunk))