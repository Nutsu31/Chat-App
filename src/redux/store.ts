import {createStore,applyMiddleware} from "redux"
import {createLogger} from "redux-logger"
import {composeWithDevTools} from "@redux-devtools/extension"
import userReducer from "./userProfile/userReducer"
import thunk from "redux-thunk"

const logger = createLogger()

const store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk,logger)))

export  default store