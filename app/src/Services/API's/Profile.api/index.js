
import api from '../../../Services/Axios/axios-api';
import axios from 'axios';

export const addProfileImage = (data) => {
    api.post(`profile/file`, data, {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",

    })
    .then( response => console.log("Done"))
    .catch( err => console.log(err) );
}

export const addCoverImage = (data) => {
    api.post(`profile/file-cover`, data, {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",

    })
    .then( response => console.log("Sent"))
    .catch( err => console.log(err) );
}

export const getProfileImage = (user_id, setProfile) => {
    // Get the users data
    api.get(`/auth/read/specific/user/${user_id}`)
    .then( response => {
        setProfile(response.data.profile);
    } )
    .catch( err => {
        console.log(err);
    } )
}

export const getCoverImage = (user_id, setCoverImg) => {
    // Get the users data
    api.get(`/auth/read/specific/user/${user_id}`)
    .then( response => {
        setCoverImg(response.data.coverprofile);
    } )
    .catch( err => {
        console.log(err);
    } )
}

export const getSpecificUser = (user_id, setSpecificUser) => {
    api.get(`/auth/read/specific/user/${ user_id }`)
    .then( res => {
        setSpecificUser(res.data);
    } )
    .catch( err => console.log(err) );
}

export const updateAbout = (id, username, email, bio, setStatus) => {
    api.post("/profile/update-about", { id, username, email, bio })
    .then( res => setStatus(true) )
    .catch( err => console.log(err) );
}
