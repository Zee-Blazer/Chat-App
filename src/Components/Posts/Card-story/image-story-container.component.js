import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as RootNavigation from '../../../Infrastructure/Navigation/root-navigation';

import { ImgStry } from '../../Tools/Styled-Components/post-card.component';

export const StoryImage = () => {

    return (
        <TouchableOpacity onPress={ () => RootNavigation.navigate("Sub")}>
            <ImgStry 
            source={{ uri: "https://media-exp1.licdn.com/dms/image/C4D08AQGWu1udLv006A/croft-frontend-shrinkToFit1024/0/1618353260341?e=2147483647&v=beta&t=eHy7UJU-r-lw5lNUDuyR-l4kQF47LNUAd13Rs8TwODY", }} 
            />
        </TouchableOpacity>
    )
}