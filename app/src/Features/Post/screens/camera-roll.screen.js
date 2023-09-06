import React, { useState, useEffect, useRef } from 'react';

import { Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, Button } from 'react-native';

// Gesture handler
import { PinchGestureHandler } from 'react-native-gesture-handler';

// Navigation component
import { useNavigation } from '@react-navigation/native';

// Expo icons
import { Entypo } from '@expo/vector-icons';

// Styled components
import { BottomCamCont, CapturePhoto } from '../components/PostViewHeader/post-view-header.styling';

// Camera and Media Library imports
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export const CameraRoll = () => {

    const navigation = useNavigation();

    let cameraRef = useRef();

    const [type, setType] = useState(CameraType.back);
    const [zoom, setZoom] = useState(0);
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaPermission, setHasMediaPermission] = useState();
    const [pic, setPic] = useState();

    const func = async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status == "granted")
        setHasMediaPermission(mediaLibraryPermission.status == "granted");
    }

    const snapPic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPic = await cameraRef.current.takePictureAsync(options);
        setPic(newPic);
    }

    const toggleCamera = () => setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));

    const changeZoom = (event) => {
        if (event.nativeEvent.scale > 1 && zoom < 1) {
          setZoom(zoom + 0.005);
        }
        if (event.nativeEvent.scale < 1 && zoom > 0) {
          setZoom(zoom - 0.005);
        }
      };

    useEffect( () => {
        func()
    }, [] )

    if(pic){
        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(pic.uri).then(() => {
              navigation.navigate("Sub", { screen: "PostNew", params: {
                img: pic.uri,
                imageFileName: pic.uri.split("file:/").join("").split('/').pop(),
                fileName: pic.uri.split("file:/").join("").split('/').pop().split('.').pop()
              } })
              console.log(pic.uri);
              setPic(undefined);
            });
          };

        return <>
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + pic.base64 }} />
                {/* <Button title="Share" onPress={sharePic} /> */}
                {hasMediaPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
                <Button title="Discard" onPress={() => setPic(undefined)} />
            </SafeAreaView>
        </>
    }

    return <>
        <PinchGestureHandler onGestureEvent={ e => changeZoom(e) }>
            <Camera 
                style={{ flex: .9,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                type={ type }
                zoom={ zoom }
                ratio="1:1"
                ref={ cameraRef }
            >
            </Camera>
        </PinchGestureHandler>
        <BottomCamCont>
            <Text>Cap</Text>
            <CapturePhoto onPress={ snapPic } />
            <TouchableOpacity onPress={ toggleCamera }>
                <Entypo name="cycle" size={24} color="black" />
            </TouchableOpacity>
        </BottomCamCont>
    </>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      backgroundColor: '#fff',
      alignSelf: 'flex-end'
    },
    preview: {
      alignSelf: 'stretch',
      flex: 1
    }
});
