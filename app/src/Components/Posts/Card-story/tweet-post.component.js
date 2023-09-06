import React, { useState } from 'react';

// React native components
import { Text } from 'react-native';

// useNavigate
import { useNavigation } from '@react-navigation/native';

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Styled component
import { StoryCard } from "../../Tools/Styled-Components/post-card.component";

// Like Post Api
import { likePost } from '../../../Services/API\'s/Post.api';

import { FlexDisplay, LikeOption } from "../../Tools/Styled-Components/post-card.component";
import { Line } from "../../Tools/Styled-Components/post-card.component";

// Component
import { ProfilePost } from './profile-post.component';

export const TweeetPost = ({ item }) => {

    const navigation = useNavigation();

    const [color, setColor] = useState('white');

    return (
        <>
            <StoryCard>

            <ProfilePost type="tweet" user_id={item.user_id} msg={item.msg} />

            <FlexDisplay>

                <LikeOption onPress={() => likePost(item._id, item.user_id, setColor)}>
                    <AntDesign name="like2" size={24} color={ color } />
                    <Text style={{ color }}>Like: 0</Text>
                </LikeOption>

                <Line />

                <LikeOption
                    onPress={() => navigation.navigate("Sub", {
                        screen: "PostComment",
                        params: { user_id: item.user_id, id: item._id }
                    })}
                >
                    <FontAwesome name="commenting-o" size={24} color="white" />
                    <Text style={{ color: "white", fontSize: 16 }}>Comment: 0</Text>
                </LikeOption>

            </FlexDisplay>
            </StoryCard>
        </>
    )
}
