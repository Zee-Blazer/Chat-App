
// React Native paper
import { Avatar } from "react-native-paper";

// Styled component
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

import { 
    FollowersLabel, 
    WhiteLabel, 
    Follow, 
    FollowText, 
    ProfileUsername,
    PersonsDetail
} from "../profile-screen.style";

// React Native component
import { TouchableOpacity, View } from "react-native";

export const Followers = () => (
    <>
        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <View style={{ marginTop: -2 }}>
                        <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                        <FollowersLabel>
                            <WhiteLabel>1,234 </WhiteLabel>Following
                            <WhiteLabel> 2,322,728</WhiteLabel> Followers
                        </FollowersLabel>
                    </View>
                    
                    <Follow flw={true}>
                        <FollowText flw={true}>Follow</FollowText>
                    </Follow>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                    <PersonsDetail>Meta CEO, Founder and CEO of Facebook, Instagram etc.</PersonsDetail>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>
    </>
)
