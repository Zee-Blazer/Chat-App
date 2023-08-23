
// Styled component
import { TabBar, TabBarItem, TabBarText } from "./profile-screen.style"

export const ProfileTabBar = () => {

    return (
        <TabBar>
            <TabBarItem active={true}>
                <TabBarText>Post</TabBarText>
            </TabBarItem>
            <TabBarItem>
                <TabBarText>About</TabBarText>
            </TabBarItem>
            <TabBarItem>
                <TabBarText>Friends</TabBarText>
            </TabBarItem>
        </TabBar>
    )
}
