import api from '../../Axios/axios-api';

export const getAllFollowers = (details, setFollowers) => {
    for(let i =0; i<details.length; i++){
        api.get(`/friends/get/getuser?user_id=${details[i].user_id}`)
            .then(response => {
                setFollowers(data => [...data, response.data]);
            })
            .catch(err => console.log(err));
    }
}

export const getAllFollowing = (details, setFollowing) => {
    for(let i =0; i<details.length; i++){
        api.get(`/friends/get/getuser?user_id=${details[i].user_id}`)
            .then(response => {
                setFollowing(data => [...data, response.data]);
            })
            .catch(err => console.log(err));
    }
}

export const newFollower = (username, id, user_id, personname) => {
    api.post("/follow/new-follower", { user_id, username, personname, id })
    .then( res => console.log(res.data) )
    .catch( err => console.log(err) );
}

export const unFollowPerson = () => {}
