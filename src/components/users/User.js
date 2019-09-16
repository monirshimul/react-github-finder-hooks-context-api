import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../Layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { user, getUser, loading, repos, getUserRepos } = githubContext;

    //useEffect works as componentDidMount()
    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
        //eslint-disable-next-line
    }, []);



    const {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;


    if (loading)
        return <Spinner />
    return (
        <Fragment>
            <div className="animated fadeInRight">
                <Link to="/" className="btn btn-dark" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }} >Back to Search</Link>
                Hireable:{' '}
                {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
            </div>

            <div className="card grid-2 animated fadeInLeft" style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }} >
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: "150px" }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn my-1" style={{ backgroundColor: "#86c8b5", boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)", color: "#ffffff" }}>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>User Name:</strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company:</strong> {company}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Web site:</strong> {blog}
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center grid-4" style={{ boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }}>
                <div className="btn btn-primary" style={{ backgroundColor: "#33bfaa", boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }} >Followers : {followers}</div>
                <div className="btn btn-danger" style={{ backgroundColor: "#41c684", boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }} >Following : {following}</div>
                <div className="btn btn-primary" style={{ backgroundColor: "#b2ac37", boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }} >Repos : {public_repos}</div>
                <div className="btn btn-danger" style={{ backgroundColor: "#4193c6", boxShadow: "1px 2px 5px rgba(0, 0, 0, .1)" }} >Gist : {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )

}



export default User
