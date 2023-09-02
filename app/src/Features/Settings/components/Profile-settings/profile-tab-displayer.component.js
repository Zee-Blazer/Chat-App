
// React native deafult component
import { FlatList, Text } from "react-native";

// Components
import { CardStory } from "../../../../Components/Posts/Card-story";
import { ProfileAbout } from "./profile-about.component";
import { ProfileFriends } from "./profile-friends.component";

export const ProfileTabDisplayer = ({ text, data }) => {

    let renderComponent;

    switch(text){
        case "Post":
            renderComponent = <>
                { data ? <FlatList 
                    data={data}
                    renderItem={ ({ item }) => (
                        <CardStory item={ item } />
                    ) }
                    keyExtractor={ item => item._id }
                /> : <Text>loading...</Text>}
            </>
            break;
        
        case "About":
            renderComponent = <>
                <ProfileAbout />
            </>
            break;

        case "Friends":
            renderComponent = <>
                <ProfileFriends />
            </>
            break;
    }

    return renderComponent
}
