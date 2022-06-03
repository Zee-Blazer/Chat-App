import React from 'react';

import { 
    Logo,
    HeaderLogo,
    LogoTxt,
} from './form.style';

// Expo google fonts
import { useFonts, Macondo_400Regular } from '@expo-google-fonts/macondo';

export const LogoNameHeader = () => {
    let [fontsLoaded] = useFonts({
        Macondo_400Regular,
    });

    if(!fontsLoaded) {
        return <LogoTxt>Hello</LogoTxt>
    }

    return (
        <HeaderLogo>
            <Logo source={ require('../../../../assets/logo.png') } />
            <LogoTxt style={{ fontFamily: "Macondo_400Regular" }}>
                Chat App
            </LogoTxt>
        </HeaderLogo>
    )
}
