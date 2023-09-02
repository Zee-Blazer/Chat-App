
// React native paper components
import { Avatar } from "react-native-paper";

// Expo icons
import { FontAwesome } from '@expo/vector-icons';

// Theme styling
import { theme } from "../../../Infrastructure/Theme";

// Styled components
import { NewPostBox, NewPostInput } from "../../Tools/Styled-Components/box-container.component"

export const NewPost = ({ changeDisplay }) => {

    return (
        <NewPostBox>
            <Avatar.Image
                size={42}
                source={{ 
                    uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" 
                }}
                style={{ marginRight: 21 }}
            />
            <NewPostInput 
                placeholder="What's on your mind?"
                multiline
                placeholderTextColor={ theme.colors.dark.text.primary }
            />
            <FontAwesome 
                name="image" 
                size={24} 
                color={ theme.colors.dark.icon.primary }
                style={{ marginTop: 12, marginLeft: 21 }} 
                onPress={ changeDisplay }
            />
        </NewPostBox>
    )
}
