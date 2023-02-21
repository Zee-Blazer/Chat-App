
import api from '../../../Services/Axios/axios-api';

export const newPost = (data, info) => {
    const { setErrMsg, setMsg, setImg } = info;

    api.post(`post/new`, data, {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    })
        .then(response => {
            setErrMsg();
            setImg();
            setMsg("");
            console.log("Done");
        })
        .catch(err => setErrMsg("An Error occured. Kindly try again"));
}

export const specificUserPost = (user_id, setData) => {
    api.get(`post/specific/user/${user_id}`)
        .then(response => setData(response.data))
        .catch(err => console.log(err));
}
export const getAllPost = (setData) => {
    api.get('post/all/posts')
        .then(response => setData(response.data))
        .catch(err => console.log(err));
}

export const likePost = (postId, user_id, setColor) => {
    api.post(`post/like`, { id: postId, user_id })
        .then(response => setColor('blue'))
        .catch(err => console.log(err));
}
