import React from 'react';
import { Text } from 'react-native';

// Styled Component
import { 
    IconInputContainer,
    UserInfoInput
} from './form.style';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';

export const IconedInput = () => {

    return (
        <IconInputContainer>
            <FontAwesome5 name="user" size={24} color="white" />
            <UserInfoInput 
                placeholder="Username" 
                autoCorrect={ false }
            />
        </IconInputContainer>
    )
}