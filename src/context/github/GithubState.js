import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING

} from '../types';


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }


    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //{{{{{{{{{{{{{{method for searching user}}}}}}}}}}}}}}

    const searchUsers = async (text) => {
        //console.log(text);
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    //{{{{{{{{{{{{{Get a Single user to make profile page}}}}}}}}}}}}}

    const getUser = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }


    // Get Repos========================================
    const getUserRepos = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    //set_loading

    const setLoading = () => dispatch({ type: SET_LOADING });


    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>



}



export default GithubState;