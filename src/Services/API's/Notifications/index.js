
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios Api caller
import api from "../../../Services/Axios/axios-api";

export const getRequests = (user_id, setRequests) => {
    api.get(`/friends/get/getrequests/${user_id}`)
    .then( response => setRequests(response.data.data) )
    .catch( err => console.log(err) );
}

export const acceptRequest = (user_id, data) => {
    // console.log(data.user_id, user_id);
    api.post(`/friends/post/check`, { user_id, details: data })
    .then( response => {
        api.post(`/friends/post/new`, { user_id, details: { new: data.user_id } })
        .then( res => {
            api.post(`/friends/post/new`, { user_id: data.user_id, details: { new: user_id } })
            .then( r => console.log(r.data) )
            .catch( e => console.log(e) );
        } )
        .catch( error => console.log(error) );
    } )
    .catch( err => console.log(err) );
}
