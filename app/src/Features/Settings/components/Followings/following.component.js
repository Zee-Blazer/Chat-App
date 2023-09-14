
// React Native paper
import { Avatar } from "react-native-paper";

// Styled component
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

// Image URI link
import { uriLink } from "../../../../Services/Axios/axios-api";

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

export const Following = ({ item }) => (
    <>
        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: 
                    item.profile ? 
                        uriLink + "profile/pic/" + item.profile
                        : 
                        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" 
                }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <View style={{ marginTop: -2, flex: 1 }}>
                        <ClientChatTextFirst>{ item.username.toUpperCase() }</ClientChatTextFirst> 
                        <FollowersLabel>
                            <WhiteLabel>{ item.following.length } </WhiteLabel>Following
                            <WhiteLabel> { item.followers.length }</WhiteLabel> Followers
                        </FollowersLabel>
                    </View>
                    
                    <Follow flw={false}>
                        <FollowText flw={false}>Following</FollowText>
                    </Follow>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                    <PersonsDetail>{ item.bio }</PersonsDetail>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>
    </>
)
