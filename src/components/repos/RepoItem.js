import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
    return (
        <div className="card" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }}>
            <h3>
                <a href={repo.html_url} className="">{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem
