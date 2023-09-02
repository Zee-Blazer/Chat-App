
// React native component
import { TouchableOpacity, Image, Dimensions } from 'react-native';

// Expo Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styled Component
import { BackgroundCover, ProfileImageDisplay } from "../profile-screen.style";

const DimensionHeight = Dimensions.get("screen").height;

export const ProfilePicDisplay = ({ showPicFunc }) => {

    return <BackgroundCover height={ DimensionHeight } onPress={ showPicFunc } >
        <TouchableOpacity>
            <MaterialIcons 
                name="cancel" 
                size={36} 
                color="white" 
                style={{ marginTop: "8%", marginLeft: "89%" }} 
                onPress={ showPicFunc }
            />
        </TouchableOpacity>

        <ProfileImageDisplay 
            source={{ uri: "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }}
            height={ DimensionHeight }
        />
    </BackgroundCover>
}
