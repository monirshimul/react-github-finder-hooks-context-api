import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');



    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please Enter Somthing', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }

    }

    // const {showClear, clearUsers} = this.props;
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }} />
            </form>
            {/* condition for showing clear button or not */}
            {githubContext.users.length > 0 &&
                <button type="button" onClick={githubContext.clearUsers}
                    className="btn btn-lg btn-block" style={{ backgroundColor: "#86c8b5", boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)", color: "#ffffff" }}>Clear
                    </button>}





        </div>
    )

}




export default Search;
