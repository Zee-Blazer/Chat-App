
// React Native prebuilt components
import { StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

// SafeArea component
import { SafeAir } from "../../../Components/Utility/safe-area.component";

// Theme 
import { theme } from '../../../Infrastructure/Theme';

// Expo icons
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Styled components
import { 
    NewPostImage, 
    WriteCaptionCont,
    WriteCaption
} from "../components/PostViewHeader/post-view-header.styling";

export const PostNew = () => {

    const navigation = useNavigation();

    return <>
        <SafeAir>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <MaterialIcons 
                    name="cancel" 
                    size={28} 
                    color="white" 
                    style={ styles.iconStyle } 
                />
            </TouchableOpacity>

            <NewPostImage 
                source={{ uri: "https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" }}  
            />

            <WriteCaptionCont>
                <WriteCaption 
                    placeholder="Add caption..."
                    placeholderTextColor="white"
                />
                <Feather name="send" size={24} color={ theme.colors.dark.icon.primary } />
            </WriteCaptionCont>
        </SafeAir>
    </>
}

const styles = StyleSheet.create({
    iconStyle: {
        alignSelf: 'flex-end',
        marginTop: 24,
        marginRight: 16
    }
})
