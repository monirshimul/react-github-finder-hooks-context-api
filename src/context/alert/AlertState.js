import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {

    SET_ALERT,
    REMOVE_ALERT
} from '../types';


const AlertState = (props) => {
    const initialState = null


    const [state, dispatch] = useReducer(AlertReducer, initialState);
    //Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg: msg, type: type }
        })

    }
    //delete Alert
    const deleteAlert = () => {
        dispatch({
            type: REMOVE_ALERT
        })
    }

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert,
            deleteAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>



}



export default AlertState;