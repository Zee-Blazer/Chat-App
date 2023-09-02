
import { FlatList, TouchableOpacity } from "react-native"

// Styled component
import { TabBar, TabBarItem, TabBarText } from "../profile-screen.style";

export const ProfileTabBar = ({ changeTab, active, navItems }) => {

    return (
        <TabBar>

            { navItems && navItems.map( item => (
                <TouchableOpacity onPress={ () => changeTab(item.text) }>
                    <TabBarItem style={{ borderBottomColor: item.text === active ? "#466EFF" : "transparent" }}>
                        <TabBarText>{ item.text }</TabBarText>
                    </TabBarItem>
                </TouchableOpacity>
            ) ) }

        </TabBar>
    )
}
