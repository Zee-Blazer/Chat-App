import React from 'react';
import { View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export const  SeePassword = ({ seePwd, setSeePwd }) => {

    const seePassword = () => {
        setSeePwd(!seePwd)
        console.log(seePwd);
    }

    return (
        <View>
            {
                !seePwd ? 
                    <FontAwesome5 name="eye-slash" size={24} color="white" onPress={ seePassword } />
                :
                    <FontAwesome5 name="eye" size={24} color="white" onPress={ seePassword } />
            }
        </View>
    )
}
