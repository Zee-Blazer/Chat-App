
import api from '../../Axios/axios-api';

export const postStory = (data) => {
    api.post(`status/new`, data, {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
}

export const getAllStatus = (setStories) => {
    api.get(`status/all/status`)
        .then(response => {
            // console.log(response.data)
            setStories(response.data);
        })
        .catch(err => console.log(err));
}

export const getSpecificStatus = (imgId) => {
    api.get(`status/image/${imgId}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err));
}

export const getUserName = (user_id, setUsername) => {
    api.get(`auth/read/specific/user/${user_id}`)
        .then(response => {
            setUsername(response.data.username);
        })
        .catch(err => console.log(err));
}
