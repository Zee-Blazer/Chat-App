import React from 'react';

import { Avatar } from 'react-native-paper';

import { 
    Box,
    Scroller,
    ProfilePost,
    ProfileLabel,
    RoundedBorder
} from '../../Tools/Styled-Components/box-container.component';

// Components that makes this work
import { AddPost } from './addPost.component';
import { ViewPost } from './viewPost.component';

export const Story = () => {

    return (
        <Box>

            <Scroller horizontal showsHorizontalScrollIndicator={false} >

                <AddPost />

                <ViewPost />
                <ViewPost />
                <ViewPost />
                <ViewPost />
                <ViewPost />

            </Scroller>

        </Box>
    )
}
