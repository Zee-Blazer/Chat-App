import React, { useState, useContext } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAir } from '../../Components/Utility/safe-area.component';

// Story Component
import { Story } from '../../Components/Posts/Story/story.component';

//Them styling
import { theme } from '../../Infrastructure/Theme';

// Context Provider Version 1.2.0
import { FriendsContextProvider, FriendsContext } from '../../Services/Friends/friends.context';

// Chat Screen Styled Components
import { 
    SplitScreen,
    SplitText, 
    Line,
    NewNotification,
    NotificationText,
    FinderSearch
} from '../../Components/Tools/Styled-Components/chat-screen.component';

// Search Bar component
import { SearchBar } from './components/search.component';

// Component
import { FriendTouch } from './components/Chat-Display-Segment/friend-touch.component';

import { ChatClient } from './components/chat-client.component';
import { FindFriend } from './components/find-friend.component';
import { ChatFriends } from './components/chat-friends.component';

export const ChatScreen = () => {

    // const { func } = useContext(FriendsContext);

    const [choose, setChoose] = useState("Friends");
    const [searchVal, setSearchVal] = useState();

    const displayer = () => {
        if( choose == "Find" ) return true;
        return false;
    }

    const doFunc = (type) => setChoose(type);

    return (
        <SafeAir>

            <ScrollView>

                <Story />

                <FriendsContextProvider>
                    <SplitScreen>
                        <FriendTouch doFunc={ doFunc } />

                        <Line />

                        <TouchableOpacity onPress={ () => doFunc("Find") }>
                            <SplitText>Find</SplitText>
                        </TouchableOpacity>
                    </SplitScreen>

                    
                    <SearchBar />

                    { !displayer() ? 
                        <ChatFriends />
                        :
                        <FindFriend />
                    }
                    
                </FriendsContextProvider>
                
            </ScrollView>
            
        </SafeAir>
    )
}
