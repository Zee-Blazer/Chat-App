
// React native components
import { Text } from 'react-native';

// useNavigate
import { useNavigation } from '@react-navigation/native';

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Styled component
import { StoryCard } from "../../Tools/Styled-Components/post-card.component";

import { FlexDisplay, LikeOption } from "../../Tools/Styled-Components/post-card.component";
import { Line } from "../../Tools/Styled-Components/post-card.component";

// Component
import { ProfilePost } from './profile-post.component';

export const TweeetPost = () => {

    const navigation = useNavigation();

    return (
        <>
            <StoryCard>

            <ProfilePost type="tweet" />

            <FlexDisplay>

                <LikeOption onPress={() => likePost(item._id, user_id, setColor)}>
                    <AntDesign name="like2" size={24} color="white" />
                    <Text style={{ color: "white" }}>Like: 0</Text>
                </LikeOption>

                <Line />

                <LikeOption
                    onPress={() => navigation.navigate("Sub", {
                        screen: "PostComment",
                        // params: { user_id: item.user_id, id: item._id }
                    })}
                >
                    <FontAwesome name="commenting-o" size={24} color="white" />
                    <Text style={{ color: "white" }}>Comment: 0</Text>
                </LikeOption>

            </FlexDisplay>
            </StoryCard>
        </>
    )
}
