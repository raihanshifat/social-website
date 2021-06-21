import * as types from '../types'


export const getID=(user_id)=>
{
    return({
        type:types.USER_ID,
        user_id:user_id,
    })
}