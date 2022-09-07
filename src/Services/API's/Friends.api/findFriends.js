
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios Api caller
import api from "../../../Services/Axios/axios-api";

export const getCurrentFriends = async (people) => {
    const user_ident = await AsyncStorage.getItem(`@user_id`);

    api.post('/friends/get/result', { collection_id: user_ident } )
    .then( response => people(response.data) )
    .catch( err => console.log(err) )
}

export const getNewFriends = ( setData ) => {
    // console.log("Doing something new")

    // console.log(people);
    api.get('/friends/get/all')
    .then( response => {
        setData(response.data);
    } )
    .catch( err => console.log(err) )

}


export const getTheUsers = (people, data, setUsers, users, user_id) => {
    if(data)
    {
        console.log("Starting here");
        // console.log(`Starting from here ${user_id}`);
        // console.log(data);

        if(people){
            for (let i = 0; i<people.length; i++){
                console.log( data.filter( item => item._id != people[i] ) )
                console.log(people[i])
            }
        }

        // setUsers( data.filter( item => item._id != user_id ) )
        // console.log(users)
        // console.log("Data is not available")
    }

}
