import React, { useContext } from 'react';

// Theme for styling
import { theme } from "../../../Infrastructure/Theme";

// Friends context Version 1.2.0
import { FriendsContext } from "../../../Services/Friends/friends.context";

import { FinderSearch } from "../../../Components/Tools/Styled-Components/chat-screen.component"

export const SearchBar = () => {

    const { searchFriend } = useContext(FriendsContext); // Friends context

    return (
        <FinderSearch 
            placeholder='Search' 
            placeholderTextColor={theme.colors.dark.text.primary}
            iconColor={theme.colors.dark.icon.secondary}
            onChangeText={ searchFriend } 
            style={{
                ...Platform.select({
                    ios: {
                        shadowColor: 'black',
                        shadowOffset: { width: 1, height: 3 },
                        shadowOpacity: 0.6,
                        shadowRadius: 8,
                    },
                    android: {
                        elevation: 4,
                    },
                    }),
            }}
        />
    )
}
