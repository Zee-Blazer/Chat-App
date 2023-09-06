import React, { useState, useEffect } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';

// Using safeAreaView for the post screen
import { SafeAir } from '../../Components/Utility/safe-area.component';

// Axios API
import { getAllPost } from '../../Services/API\'s/Post.api';

// Necessary import to keep the PostScreen in order.
import { Story } from '../../Components/Posts/Story/story.component';
import { CardStory } from '../../Components/Posts/Card-story';

// New Post component
import { NewPost } from '../../Components/Posts/New-post';
import { TweeetPost } from '../../Components/Posts/Card-story/tweet-post.component';

// The Post action for both Status and normal posts
import { PostAction } from '../../Components/Posts/New-post/post-action.component';

export const PostScreen = ({ navigation }) => {
    const [data, setData] = useState();
    const [type, setType] = useState();

    const [display, setDisplay] = useState(false); // Display the Post & Status icons for selection

    const navigateToScreen = (screen) => {
        navigation.navigate(screen)
    }

    useEffect( () => {
        getAllPost(setData);
    }, [] )

    const changeDisplay = (e) => {
        setDisplay(!display);
        setType(e);
    }

    return (
        <SafeAir>
            { display && <PostAction changeDisplay={ changeDisplay } type={ type } /> }

            <ScrollView>

                <NewPost changeDisplay={ changeDisplay } />

                <Story changeDisplay={ changeDisplay } />

                {/* <Text onPress={() => navigation.navigate("Sub", {
                    screen: "PostNew",
                    params: { imgUrl: "Something" }
                })}
                >Navigate</Text> */}

                { data ? <FlatList 
                    data={data}
                    renderItem={ ({ item }) => {
                        if(!item.fileUrl) return <TweeetPost item={ item } />
                        return (
                            <CardStory item={ item } />
                        )
                    } }
                    keyExtractor={ item => item._id }
                /> : <Text>loading...</Text>}

            </ScrollView>

        </SafeAir>
    )
}
