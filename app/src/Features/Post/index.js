import React, { useState, useEffect } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';

// Using safeAreaView for the post screen
import { SafeAir } from '../../Components/Utility/safe-area.component';

// Axios API
import { getAllPost } from '../../Services/API\'s/Post.api';

// Necessary import to keep the PostScreen in order.
import { Story } from '../../Components/Posts/Story/story.component';
import { CardStory } from '../../Components/Posts/Card-story';

export const PostScreen = ({ navigation }) => {
    const [data, setData] = useState();

    const navigateToScreen = (screen) => {
        navigation.navigate(screen)
    }

    useEffect( () => {
        getAllPost(setData);
    }, [] )

    return (
        <SafeAir>

            <ScrollView>

                <Story />

                { data ? <FlatList 
                    data={data}
                    renderItem={ ({ item }) => (
                        <CardStory item={ item } />
                    ) }
                    keyExtractor={ item => item._id }
                /> : <Text>loading...</Text>}

            </ScrollView>

        </SafeAir>
    )
}
