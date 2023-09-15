import React, { useState, useEffect, useContext } from 'react'; // Version 1.2.0

import { FlatList, text } from 'react-native'; // React native import

// Context Provider
import { FollowContextProvider } from '../../../../Services/Follow/follow.context';

// API call 
import { getAllFollowers, getAllFollowing } from '../../../../Services/API\'s/Follow';

// Components 
import { Following } from "./following.component";
import { Followers } from "./follower.component";

export const FollowingsDisplayer = ({ text, type, item }) => {

    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    useEffect( () => {
        getAllFollowers(item.followers, setFollowers);
        getAllFollowing(item.following, setFollowing);
    }, [] )

    let renderComponent;

    switch(text){
        case "Followers":
            renderComponent = <>
                { followers ? 
                    <FlatList 
                        data={ followers }
                        renderItem={ ({item}) => (
                            <Followers item={ item } /> 
                        ) }
                        keyExtractor={ item => item }
                    />
                    : 
                    <Text>No Followers</Text> 
                }
            </>
            break;
        case "Following":
            renderComponent = <>
                { following ? 
                    <FlatList 
                        data={ following }
                        renderItem={ ({item}) => (
                            <Following item={ item } /> 
                        ) }
                        keyExtractor={ item => item }
                    />
                    : 
                    <Text style={{ color: "white", fontSize: 21 }}>No Following</Text> 
                }
            </>
            break;
    }

    return renderComponent 
}
