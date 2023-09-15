import React, { useState, useEffect, useContext } from 'react';

// React Native paper
import { Avatar } from "react-native-paper";

// Follow Context 
import { FollowContext } from '../../../../Services/Follow/follow.context';

// Styled component
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Image URI link
import { uriLink } from "../../../../Services/Axios/axios-api";

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

export const Following = ({ item }) => {

    const { startFollowing } = useContext(FollowContext)

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
            <ClientChatBox>
                <TouchableOpacity>
                <Avatar.Image
                    size={54}
                    source={{ uri: 
                        item.profile ? 
                            uriLink + "profile/pic/" + item.profile
                            : 
                            "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" 
                    }}
                />
                </TouchableOpacity>
    
                <ClientMsg>
                    <ClientMsgContainer>
                        <View style={{ marginTop: -2, flex: 1 }}>
                            <ClientChatTextFirst>
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
                            onPress={ () => startFollowing() }
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
    
            </ClientChatBox>
        </>
    )
}
