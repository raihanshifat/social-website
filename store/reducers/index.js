import {combineReducers, combineReduces} from 'redux';
import {userReducer} from './userID';

export default combineReducers(
    {
        getID:userReducer
    }
);