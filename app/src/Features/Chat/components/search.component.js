
// Theme for styling
import { theme } from "../../../Infrastructure/Theme"

import { FinderSearch } from "../../../Components/Tools/Styled-Components/chat-screen.component"

export const SearchBar = () => (
    <FinderSearch 
        placeholder='Search' 
        placeholderTextColor={theme.colors.dark.text.primary}
        iconColor={theme.colors.dark.icon.secondary}
        onChange={ (e) => console.log(e) } 
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
