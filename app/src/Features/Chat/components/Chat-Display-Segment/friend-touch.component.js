import React, { useContext } from "react";

import { TouchableOpacity } from "react-native";

// Friend Context
import { FriendsContext } from "../../../../Services/Friends/friends.context";

// Styled components
import { 
    NewNotification, 
    SplitText, 
    NotificationText
} from "../../../../Components/Tools/Styled-Components/chat-screen.component";

export const FriendTouch = ({ doFunc }) => {

    const { allNewNotifications } = useContext(FriendsContext);

    return (
        <>
            <TouchableOpacity onPress={ () => doFunc("Friends") } style={{ flexDirection: "row" }}>
                <SplitText style={{ marginRight: 6 }}>Friends</SplitText>
                <NewNotification>
                    <NotificationText>{ allNewNotifications && allNewNotifications }</NotificationText>
                </NewNotification>
            </TouchableOpacity>
        </>
    )
}
