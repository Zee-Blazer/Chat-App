import React from 'react';
import { TouchableOpacity } from 'react-native';

// Root Navigation
import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

// Post Gallery URI
import { uriLink } from '../../../Services/Axios/axios-api';

import { ImgStry } from '../../Tools/Styled-Components/post-card.component';

export const StoryImage = ({ imgUri }) => {

    return (
        <TouchableOpacity onPress={ () => RootNavigation.navigate("Sub")}>
            <ImgStry 
            source={{ uri: `${ imgUri ? uriLink + "post/image/" + imgUri : "" }` }} 
            />
        </TouchableOpacity>
    )
}