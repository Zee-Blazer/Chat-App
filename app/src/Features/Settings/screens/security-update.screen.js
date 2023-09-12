import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';

// Styled components elements
import {
    SecurityTitle, 
    InputBox, 
    InputLabel, 
    MainInput, 
    UpdateBtn, 
    BtnUpdateCont, 
    DeleteAccountText, 
    ResettedPassword
} from '../components/profile-screen.style';

// Error message styled component
import { ErrorMsg } from '../components/profile-screen.style';

// Authentication context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Safe Area
import { SafeAir } from '../../../Components/Utility/safe-area.component';

export const SecurityUpdateScreen = () => {

    const [currentPwd, setCurrentPwd] = useState();
    const [newPwd, setNewPwd] = useState();
    const [confirmNewPwd, setConfirmNewPwd] = useState();

    const [err, setErr] = useState();
    const [userEmail, setUserEmail] = useState();

    // Context
    const { changePassword, user, errMsg, reset } = useContext(AuthContext)

    const changePwd = () => {
        if (newPwd == confirmNewPwd && userEmail) {
            changePassword(userEmail, currentPwd, confirmNewPwd);
            setConfirmNewPwd();
            setCurrentPwd();
            setNewPwd();
        }
        else {
            setErr("Password Mismatch")
        }
    }

    useEffect(() => {
        setUserEmail(JSON.parse(user).email);
    }, [])

    return (
        <SafeAir>
            <SecurityTitle>Security Update</SecurityTitle>

            {reset && <ResettedPassword>{reset}</ResettedPassword>}
            {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
            {err && <ErrorMsg>{err}</ErrorMsg>}

            <InputBox>
                <InputLabel>Current Password</InputLabel>
                <MainInput
                    secureTextEntry={true}
                    onChangeText={setCurrentPwd}
                />
            </InputBox>

            <InputBox>
                <InputLabel>New Password</InputLabel>
                <MainInput
                    secureTextEntry={true}
                    onChangeText={setNewPwd}
                />
            </InputBox>

            <InputBox>
                <InputLabel>Confirm New Password</InputLabel>
                <MainInput
                    secureTextEntry={true}
                    onChangeText={setConfirmNewPwd}
                />
            </InputBox>

            <BtnUpdateCont>
                <UpdateBtn
                    onPress={changePwd}
                    title="Update Password"
                />
            </BtnUpdateCont>

            <DeleteAccountText>Delete account</DeleteAccountText>

        </SafeAir>
    )
}
