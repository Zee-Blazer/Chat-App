
// React native deafult component
import { FlatList, Text } from "react-native";

// Components
import { CardStory } from "../../../../Components/Posts/Card-story";
import { TweeetPost } from "../../../../Components/Posts/Card-story/tweet-post.component";
import { ProfileAbout } from "./profile-about.component";
import { ProfileFriends } from "./profile-friends.component";

export const ProfileTabDisplayer = ({ text, data, type }) => {

    let renderComponent;

    switch(text){
        case "Post":
            renderComponent = <>
                { data ? <FlatList 
                    data={data}
                    renderItem={ ({ item }) => ( //fileUrl
                        <>
                            { 
                                item.fileUrl ? 
                                    <CardStory item={ item } /> :
                                    <TweeetPost item={ item } /> 
                            }
                        </>
                    ) }
                    keyExtractor={ item => item._id }
                /> : <Text>loading...</Text>}
            </>
            break;
        
        case "About":
            renderComponent = <>
                <ProfileAbout type={ type } />
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
