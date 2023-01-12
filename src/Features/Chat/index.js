import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import { SafeAir } from '../../Components/Utility/safe-area.component';

// Story Component
import { Story } from '../../Components/Posts/Story/story.component';

// Chat Screen Styled Components
import { 
    SplitScreen,
    SplitText, 
    Line,
    FinderSearch
} from '../../Components/Tools/Styled-Components/chat-screen.component';

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

            <FinderSearch placeholder='Search' onChange={ (e) => console.log(e) } />

            { !displayer() ? 
                <ChatFriends />
                :
                <FindFriend />
            }
            
        </SafeAir>
    )
}
