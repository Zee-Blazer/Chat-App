import React, { useState, useEffect } from 'react';

// Axios API
import { getAllStatus } from '../../../Services/API\'s/Story.api';

import { FlatList } from 'react-native';

import {
    Box,
    Scroller,
} from '../../Tools/Styled-Components/box-container.component';

// Components that makes this work
import { AddPost } from './addPost.component';
import { ViewPost } from './viewPost.component';

export const Story = ({ changeDisplay, refresh }) => {
    const [stories, setStories] = useState();

    useEffect(() => {
        getAllStatus(setStories);
    }, [])

    const openDisplay = (e) => changeDisplay(e);

    useEffect( () => {
        getAllStatus(setStories);
    }, [refresh] )

    return (
        <Box>

            <Scroller horizontal showsHorizontalScrollIndicator={false} >

                <AddPost open={ openDisplay } />

                { stories && <FlatList 
                    horizontal
                    data={stories}
                    renderItem={ ({ item }) => {
                        console.log(item)
                        return (
                            <ViewPost item={ item } />
                        )
                    } }
                    keyExtractor={ item => item._id }
                /> }

            </Scroller>

        </Box>
    )
}
