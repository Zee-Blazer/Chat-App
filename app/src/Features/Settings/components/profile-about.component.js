
// Styled component
import { 
    ProfileDetailsCont, 
    ProfileUsername, 
    ProfileEmail,
    FollowBox,
    FollowersLabel,
    WhiteLabel
} from "./profile-screen.style"

export const ProfileAbout = () => {

    return (
        <ProfileDetailsCont>
            <ProfileUsername>Mark Zukerburg</ProfileUsername>
            <ProfileEmail>mark.zukerburg@gmail.com</ProfileEmail>

            <ProfileUsername>Meta CEO, Founder and CEO of Facebook, Instagram etc.</ProfileUsername>
            <FollowBox>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
            </FollowBox>
        </ProfileDetailsCont>
    )
}
