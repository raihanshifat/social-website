import * as types from '../types';
const initialState={
    user_id:"",
}

export const userReducer=(state=initialState,action)=>{
    switch(action.types)
    {
        case types.USER_ID:
            return{
                ...state,
                user_id:action.user_id
            }
        default:
            return state;
    }
}