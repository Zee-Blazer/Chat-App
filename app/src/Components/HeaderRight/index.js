import React from 'react';
import { TouchableOpacity } from 'react-native';

// Icon
import { Entypo } from '@expo/vector-icons';

export const HeaderRight = ({ route }) => {
    
    return (
        <TouchableOpacity>
            <Entypo 
                name="dots-three-vertical" 
                size={24} 
                color="white" 
                style={{ marginRight: 17 }}
            />
        </TouchableOpacity>
    )
};
