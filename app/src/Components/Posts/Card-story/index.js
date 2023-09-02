import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// The container card
import { StoryCard } from '../../Tools/Styled-Components/post-card.component';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';


// Navigation
import { useNavigation } from '@react-navigation/native';

// API request to get username
// import { getUserName } from '../../../Services/API\'s/Story.api';

// Importing the main theme
import { theme } from '../../../Infrastructure/Theme/index';

// The Image Card
import { StoryImage } from './image-story-container.component';

// Profile Post
import { ProfilePost } from './profile-post.component';

// Axios API
import { likePost } from '../../../Services/API\'s/Post.api';

// Styled components
import {
    FlexDisplay,
    LikeOption,
    RecCount
} from '../../Tools/Styled-Components/post-card.component';
import { Line } from '../../Tools/Styled-Components/post-card.component';

export const CardStory = ({ item }) => {

    const navigation = useNavigation();

    const [user_id, setUser_id] = useState();
    const [color, setColor] = useState(theme.colors.dark.text.primary);
    const [cmColor, setCmColor] = useState(theme.colors.dark.text.primary);

    useEffect(async () => {
        setUser_id(await AsyncStorage.getItem(`@user_id`));
    }, [])

    useEffect( () => {
        if(item.peopleLike.includes(user_id)){
            setColor(theme.colors.dark.text.primary)
            console.log("Working");
        }
    }, [] )

    return (
        <>
            <StoryCard>
                <StoryImage imgUri={item.fileUrl} user_id={item.user_id} />

                <ProfilePost user_id={item.user_id} msg={item.msg} />
                {/* <Text onPress={ () => {console.log(item.peopleLike.includes(user_id))} } >Show</Text> */}

                <FlexDisplay>

                    <LikeOption onPress={() => likePost(item._id, user_id, setColor)}>
                        <AntDesign name="like2" size={24} color={color} />
                        <Text style={{ color }}>Like: {item.likes}</Text>
                    </LikeOption>

                    <Line />

                    <LikeOption
                        onPress={() => navigation.navigate("Sub", {
                            screen: "PostComment",
                            params: { user_id: item.user_id, id: item._id }
                        })}
                    >
                        <FontAwesome name="commenting-o" size={24} color={cmColor} />
                        <Text style={{ color: cmColor }}>Comment: {item.comments.length}</Text>
                    </LikeOption>

                </FlexDisplay>
            </StoryCard>
        </>
    )
}