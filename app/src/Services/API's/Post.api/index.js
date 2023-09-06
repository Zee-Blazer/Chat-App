
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
        })
        .catch(err => setErrMsg("An Error occured. Kindly try again"));
}

export const barePost = (data) => {
    api.post( 'post/new-msg', data)
    .then( doc => console.log(doc.data) )
    .catch( err => console.log(err) );
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

export const getAllComments = (user_id, setComments) => {
    api.get(`/post/specific/comment/${user_id}`)
        .then( res => setComments(res.data) )
        .catch( err => console.log(err) );
}

export const makeComment = (id, details) => {
    api.post('/post/comment', { id, details })
        .then( res => console.log(res.data) )
        .catch( err => console.log(err) );
}
