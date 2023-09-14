import React, { useState, useEffect, useCallback } from 'react';
import { Text, ScrollView, FlatList, RefreshControl } from 'react-native';

// Using safeAreaView for the post screen
import { SafeAir } from '../../Components/Utility/safe-area.component';

// React Native paper Spinner
import { ActivityIndicator, Colors } from 'react-native-paper';

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
    const [refresh, setRefresh] = useState(false);

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

    const onRefresh = React.useCallback(() => {
        setRefresh(true);
        getAllPost(setData);
        setTimeout(() => {
          setRefresh(false);
        }, 1500);
    }, []);

    return (
        <SafeAir>
            { display && <PostAction changeDisplay={ changeDisplay } type={ type } /> }

            {/* Spinner Loader  */}
            { 
                refresh && 
                <ActivityIndicator 
                    animating={true} 
                    color={Colors.blue300} 
                    style={{ marginTop: 4 }} 
                /> 
            }

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={ refresh } onRefresh={ onRefresh } />
                  }
            >

                <NewPost changeDisplay={ changeDisplay } />

                <Story changeDisplay={ changeDisplay } refresh={ refresh } type="post" />

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
