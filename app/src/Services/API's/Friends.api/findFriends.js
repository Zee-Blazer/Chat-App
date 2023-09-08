
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios Api caller
import api from "../../../Services/Axios/axios-api";

// Getting the user_id of all a particular users friend.
export const getCurrentFriends = (user_id, setallIds) => {

    if (user_id) {
        api.get(`/friends/get/myfriends?user_id=${user_id}`)
            .then(response => {
                setallIds(response.data);
            })
            .catch(err => console.log(err))
    }
}

export const getNewFriends = (user_id, data) => {
    console.log(user_id);
    api.get(`/friends/get/getall/${user_id}`)
        .then(response => {
            data(response.data)
        })
        .catch(err => console.log(err))

}

// To get all the requests of a new friend from the backend
export const allNewRequests = (user_id) => {
    api.get(`/friends/get/getrequests?user_id=${user_id}`)
        .then(response => console.log(response.data.data))
        .catch(err => console.log(err))
}

// Add to new friends to a user's record
export const addNewFriendRequest = (user_id, details, reply) => {
    // console.log(user_id); // console.log(details.username, details._id);
    api.post(`/friends/post/check`, {
        user_id,
        details: {
            user_id: details._id,
            username: details.username,
            accepted: false
        }
    })
        .then(response => {
            // console.log(response.data);
            reply("Request Successfully Sent!!")
        })
        .catch(err => console.log(err));
}

// Get specific user
export const getTheUsers = (allIds, setData) => {
    // console.log(allIds);
    for (let i = 0; i < allIds.length; i++) {
        // console.log(allIds[i]);
        api.get(`/friends/get/getuser?user_id=${allIds[i]}`)
            .then(response => {
                setData(data => [...data, response.data]);
                // console.log(data);
                // console.log(response.data);
            })
            .catch(err => console.log(err));
    }
}
