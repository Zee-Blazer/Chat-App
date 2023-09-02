
// Styled components
import { 
    ProfileAboutCont, 
    ProfileAboutLabel, 
    ProfileAboutInputBox,
    ProfileAboutInput,
    ProfileAboutButton,
    ProfileAboutBtnLabel
} from "../profile-screen.style";

// Theme 
import { theme } from "../../../../Infrastructure/Theme";

export const ProfileAbout = () => {

    return (
        <>
            <ProfileAboutCont>
                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Username:</ProfileAboutLabel>
                    <ProfileAboutInput 
                        editable={false}
                        defaultValue="Mark Zukerburg"
                    />
                </ProfileAboutInputBox>

                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Email:</ProfileAboutLabel>

                    <ProfileAboutInput 
                        editable={false}
                        defaultValue="mark.zukerburg@gmail.com"
                    />
                </ProfileAboutInputBox>

                <ProfileAboutInputBox>
                    <ProfileAboutLabel>Bio:</ProfileAboutLabel>
                    <ProfileAboutInput 
                        editable
                        multiline
                        placeholder="Write a Bio"
                        placeholderTextColor={ theme.colors.dark.text.secondary }
                    />
                </ProfileAboutInputBox>

            </ProfileAboutCont>

            <ProfileAboutButton>
                <ProfileAboutBtnLabel>UPDATE</ProfileAboutBtnLabel>
            </ProfileAboutButton>
        </>
    )
}
