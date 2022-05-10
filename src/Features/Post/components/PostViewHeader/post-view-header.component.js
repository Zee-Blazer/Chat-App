import React from 'react';
import { Text, View } from 'react-native-paper';

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Styled component
import { FixedTopHeader } from './post-view-header.styling';

export const PostViewHeader = () => {

    return (
        <FixedTopHeader>
            <View>
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />
            </View>

            <Text>Header</Text>
        </FixedTopHeader>
    )
}