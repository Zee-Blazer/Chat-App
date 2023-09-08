import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAir } from '../../Components/Utility/safe-area.component';

// Story Component
import { Story } from '../../Components/Posts/Story/story.component';

//Them styling
import { theme } from '../../Infrastructure/Theme';

// Context Provider Version 1.2.0
import { FriendsContextProvider } from '../../Services/Friends/friends.context';

// Chat Screen Styled Components
import { 
    SplitScreen,
    SplitText, 
    Line,
    FinderSearch
} from '../../Components/Tools/Styled-Components/chat-screen.component';

// Search Bar component
import { SearchBar } from './components/search.component';

import { ChatClient } from './components/chat-client.component';
import { FindFriend } from './components/find-friend.component';
import { ChatFriends } from './components/chat-friends.component';

export const ChatScreen = () => {

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

                <SplitScreen>
                    <TouchableOpacity onPress={ () => doFunc("Friends") }>
                        <SplitText>Friends</SplitText>
                    </TouchableOpacity>

                    <Line />

                    <TouchableOpacity onPress={ () => doFunc("Find") }>
                        <SplitText>Find</SplitText>
                    </TouchableOpacity>
                </SplitScreen>

                <FriendsContextProvider>
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