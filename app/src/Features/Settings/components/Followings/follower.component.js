import React, { useState, useEffect, useContext } from 'react';

// React Native paper
import { Avatar } from "react-native-paper";

// Styled component
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

// Follow Context
import { FollowContext } from '../../../../Services/Follow/follow.context';

// Image URI link
import { uriLink } from "../../../../Services/Axios/axios-api";

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    FollowersLabel, 
    WhiteLabel, 
    Follow, 
    FollowText, 
    ProfileUsername,
    PersonsDetail
} from "../profile-screen.style";

// React Native component
import { TouchableOpacity, View } from "react-native";

export const Followers = ({ item }) => {

    const { startFollowing, updated, unFollow } = useContext(FollowContext);

    const [userId, setUserId] = useState();
    const [isFollower, setIsFollower] = useState();

    useEffect( async () => {
        let user = await AsyncStorage.getItem("@user_id")
        setUserId(user);
    }, [] )

    useEffect( () => {
        setIsFollower(item.followers.some( item => item.user_id === userId ))
    }, [userId] )

    return (
        <>
            { item && <ClientChatBox>
                <TouchableOpacity>
                <Avatar.Image
                    size={54}
                    source={{ uri: 
                        item.profile ? 
                            uriLink + "profile/pic/" + item.profile
                            : 
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    }}
                />
                </TouchableOpacity>
    
                <ClientMsg>
                    <ClientMsgContainer>
                        <View style={{ marginTop: -2, flex: 1 }}>
                            <ClientChatTextFirst 
                                style={{ color: item._id == userId  ? "lightgreen" : "white" }}
                            >
                                { 
                                    item._id == userId ? 
                                        `Me: ${item.username.toUpperCase()}` : 
                                        item.username.toUpperCase() 
                                }
                            </ClientChatTextFirst> 
                            <FollowersLabel>
                                <WhiteLabel>{ item.following.length } </WhiteLabel>Following
                                <WhiteLabel> { item.followers.length }</WhiteLabel> Followers
                            </FollowersLabel>
                        </View>
                        
                        <Follow
                            flw={ isFollower ? isFollower : "" }
                            onPress={ () => isFollower ? unFollow(item) : startFollowing(item) }
                        >
                            <FollowText
                                flw={ isFollower ? isFollower : "" }
                            >
                                { isFollower ? "Following" : "Follow" }
                            </FollowText>
                        </Follow>
                        
                    </ClientMsgContainer>
    
                    <ClientMsgContainer>
                        <PersonsDetail>{ item.bio }</PersonsDetail>
                    </ClientMsgContainer>
                </ClientMsg>
    
            </ClientChatBox> }
        </>
    )
}
