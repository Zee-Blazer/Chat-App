
// React native component
import { TouchableOpacity } from "react-native-gesture-handler";

// Styled component
import { 
    ProfileDetailsCont, 
    ProfileUsername, 
    ProfileEmail,
    FollowBox,
    FollowersLabel,
    WhiteLabel
} from "../profile-screen.style";

// The Navigation
import { useNavigation } from "@react-navigation/native";

export const ProfileInfo = () => {

    const navigation = useNavigation();

    return (
        <ProfileDetailsCont>
            <ProfileUsername>Mark Zukerburg</ProfileUsername>
            <ProfileEmail>mark.zukerburg@gmail.com</ProfileEmail>

            <ProfileUsername>Meta CEO, Founder and CEO of Facebook, Instagram etc.</ProfileUsername>
            <FollowBox>
                <TouchableOpacity onPress={ () => navigation.navigate("SettingsSub", { screen: "Followings" }) }>
                    <FollowersLabel>
                        <WhiteLabel>1,234 </WhiteLabel>
                        Following
                        <WhiteLabel> 2,322,728</WhiteLabel> 
                        Followers
                    </FollowersLabel>
                </TouchableOpacity>
            </FollowBox>
        </ProfileDetailsCont>
    )
}
