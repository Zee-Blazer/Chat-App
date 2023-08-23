import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Button, ActivityIndicator, MD2Colors } from 'react-native-paper';

// Using safeAreaView for the post screen
import { SafeAir } from '../../Components/Utility/safe-area.component';

// Stylings
import { TitleHeader } from './components/notification-view.style';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api calls
import { getRequests } from '../../Services/API\'s/Notifications';

import { NewFriendsNotification } from './components/new-friend-notification.component';

export const NotificationScreen = ({ navigation }) => {

    const [user_id, setUser_id] = useState();
    const [requests, setRequests] = useState();

    useEffect( async () => {
        setUser_id( await AsyncStorage.getItem(`@user_id`) );
    }, [] )

    useEffect( () => {
        getRequests(user_id, setRequests);
    }, [user_id] )

    return (
        <SafeAir>

            <TitleHeader>Notifications</TitleHeader>

            { requests ? 
                <FlatList 
                    data={ requests }
                    renderItem={ ({item}) => {

                        if(!item.accepted) {
                            return (
                                <>
                                    <NewFriendsNotification data={ item } id={ user_id } />
                                </>
                            )
                        }

                    } }
                    keyExtractor={ item => item._id }
                />
            : 
                <ActivityIndicator animating={true} color="blue" /> }

        </SafeAir>
    )
}
