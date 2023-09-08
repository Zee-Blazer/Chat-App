import React, { useState, useEffect } from 'react';

// React native components
import { Text } from 'react-native';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// useNavigate
import { useNavigation } from '@react-navigation/native';

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Theme styling
import { theme } from '../../../Infrastructure/Theme';

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

    const [user_id, setUser_id] = useState();
    const [color, setColor] = useState(theme.colors.dark.text.primary);
    const [cmColor, setCmColor] = useState(theme.colors.dark.text.primary);
    const [add, setAdd] = useState(false);

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    useEffect( () => {
        item.peopleLike.includes(user_id) && setColor(theme.colors.dark.text.secondary);
        item.comments.some( ele => ele.user_id === user_id ) && setCmColor(theme.colors.dark.text.secondary);
    }, [user_id] )

    return (
        <>
            <StoryCard>

            <ProfilePost type="tweet" user_id={item.user_id} msg={item.msg} />

            <FlexDisplay>

                <LikeOption onPress={() => {
                    likePost(item._id, item.user_id, setColor);
                    setAdd(true);
                }}>
                    <AntDesign name="like2" size={24} color={ color } />
                    <Text style={{ color }}>Like: { add ? item.likes +1 : item.likes } </Text>
                </LikeOption>

                <Line />

                <LikeOption
                    onPress={() => navigation.navigate("Sub", {
                        screen: "PostComment",
                        params: { user_id: item.user_id, id: item._id }
                    })}
                >
                    <FontAwesome name="commenting-o" size={24} color={ cmColor } />
                    <Text style={{ color: cmColor, fontSize: 16 }}>Comment:  {item.comments.length}</Text>
                </LikeOption>

            </FlexDisplay>
            </StoryCard>
        </>
    )
}
