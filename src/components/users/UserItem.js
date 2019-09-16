import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    return (
        <div className="card text-center animated zoomIn" style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
            <img src={avatar_url} className="round-img" alt="" style={{ width: "65px" }} />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )

}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
