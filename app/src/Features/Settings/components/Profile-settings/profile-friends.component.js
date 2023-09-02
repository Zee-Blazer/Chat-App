
// React Native paper
import { Avatar } from "react-native-paper";

// React Native component
import { TouchableOpacity } from "react-native-gesture-handler";

// Components
import { SearchBar } from "../../../Chat/components/search.component";
import { 
    ClientChatBox,
    ClientMsgContainer,
    ClientChatTextFirst,
    ClientMsg,
    ClientChatTextDown
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

import { FollowersLabel, WhiteLabel } from "../profile-screen.style";

// Expo Icons
import { Entypo } from '@expo/vector-icons'; 

export const ProfileFriends = () => {

    return <>
        <SearchBar />

        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>

        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>

        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>

        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>

        <ClientChatBox>
            <TouchableOpacity>
            <Avatar.Image
                size={54}
                source={{ uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1411842976.1640908800" }}
            />
            </TouchableOpacity>

            <ClientMsg>
                <ClientMsgContainer>
                    <ClientChatTextFirst>Steve Jobs</ClientChatTextFirst> 
                    
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                    
                </ClientMsgContainer>

                <ClientMsgContainer>
                <FollowersLabel><WhiteLabel>1,234 </WhiteLabel>Following<WhiteLabel> 2,322,728</WhiteLabel> Followers</FollowersLabel>
                </ClientMsgContainer>
            </ClientMsg>

        </ClientChatBox>
    </>
}
