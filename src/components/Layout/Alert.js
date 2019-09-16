import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';


function Alert() {
    const alertContext = useContext(AlertContext);
    const { alert, deleteAlert } = alertContext;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>

                <i className="fas fa-info-circle" style={{ color: "#c60707" }}></i>&nbsp;{alert.msg}


                <i className="fas fa-backspace"
                    style={{ float: "right", color: "#c60707", cursor: "pointer" }}
                    onClick={deleteAlert}>

                </i>


            </div>
        )
    )
}

export default Alert
