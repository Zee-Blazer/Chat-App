import React, { useState, useEffect, useContext } from 'react';

// React Native paper
import { Avatar } from "react-native-paper";

// React Native component
import { FlatList, Text } from "react-native";

// Context Version 1.2.0
import { FriendsContext } from "../../../../Services/Friends/friends.context";

// Components
import { SearchBar } from "../../../Chat/components/search.component";
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
    ClientChatTextDown
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

// API 
import { getTheUsers } from '../../../../Services/API\'s/Friends.api/findFriends';

import { FollowersLabel, WhiteLabel } from "../profile-screen.style";

// Component
import { FriendDisplay } from './friend-display.component';

// Expo Icons
import { Entypo } from '@expo/vector-icons'; 

export const ProfileFriends = ({ type }) => {

    const { data, filterData, search } = useContext(FriendsContext);

    const [allData, setAllData] = useState();

    // useEffect( () => {
    //     if(type.type === "view"){
    //         getTheUsers(type.item.friends, setAllData);
    //     }
    // }, [] );

    return <>
        { type.type !== "view" ?
            <>
                <SearchBar />

                { search ? 
                    filterData ? 
                        <FlatList 
                            data={ filterData }
                            renderItem={ ({item}) => (
                                <FriendDisplay item={ item } />
                            ) }
                            keyExtractor={ item => item._id }
                        /> : ""
                    : data ? 
                        <FlatList 
                            data={ data }
                            renderItem={ ({item}) => (
                                <FriendDisplay item={ item } />
                            ) }
                            keyExtractor={ item => item._id }
                        />
                : "" }
            </> :
            // allData && <FlatList
            //     data={ allData }
            //     renderItem={ ({item}) => (
            //         <FriendDisplay item={ item } />
            //     ) }
            //     keyExtractor={ item => item._id }
            // />
            <Text style={{ color: 'white' }}>Working on this feature</Text>
        }
    </>
}
