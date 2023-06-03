import { ActionType } from "../../types/Types"
import { ACTIONS } from "./userType"

const initialState = {
    isUserLoggedIn:false,
    loading:false,
    user:{},
    error:""
}

const userReducer = (state = initialState,action:ActionType)=>{
    switch(action.type){
        case ACTIONS.FETCH_USER_REQUEST:
            return {...state,loading: true}
        case ACTIONS.FETCH_USER_SUCCESS:
            return {...state, loading:false, user: action.payload.user,isUserLoggedIn:true}
        case ACTIONS.FETCH_USER_ERROR:
            return {...state, loading:false, error:action.payload.error, isUserLoggedIn:false}
        case ACTIONS.USER_LOG_OUT:
            return {...state,isUserLoggedIn:false}
        default:
            return state
    }
}

export default userReducer