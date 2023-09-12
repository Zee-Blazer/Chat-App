import React, { useContext } from 'react';

// React Native paper
import { Avatar } from "react-native-paper";

// React Native component
import { FlatList } from "react-native";

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

import { FollowersLabel, WhiteLabel } from "../profile-screen.style";

// Component
import { FriendDisplay } from './friend-display.component';

// Expo Icons
import { Entypo } from '@expo/vector-icons'; 

export const ProfileFriends = () => {

    const { data, filterData, search } = useContext(FriendsContext);

    return <>
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
    </>
}
