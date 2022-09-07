import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

// Safe Area View
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Header Logo Name component
import { LogoNameHeader } from '../components/logo-name.component';

// API Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Styled components
import { 
    AccountBackgroundForm,
    IconInputContainer,
    UserInfoInput,
    ButtonContainer,
    ButtonElementAction,
    ErrorMsg
} from '../components/form.style';

// Password Viewer Component
import { SeePassword } from '../components/see-password.component';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Components
import { IconedInput } from '../components/iconed-input.component';

export const LoginScreen = ({ navigation }) => {

    const { Login, isLoading, errMsg } = useContext(AuthContext);

    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const [seePwd, setSeePwd] = useState(true);

    const doLogin = () => {
        Login( email, password );
        // console.log("Okay")

        // navigation.navigate("SignUp")
    }

    return (
        <AccountBackgroundForm>
            <SafeAir>
                
                <LogoNameHeader />

                <ErrorMsg>
                    { errMsg }
                </ErrorMsg>

                <IconInputContainer>
                    <MaterialIcons name="email" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="E-mail" 
                        autoCorrect={ false }
                        onChangeText={ setEmail }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <FontAwesome5 name="key" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Password" 
                        autoCorrect={ false }
                        secureTextEntry={ seePwd }
                        onChangeText={ setPassword }
                    />
                    { password ? <SeePassword seePwd={ seePwd } setSeePwd={ setSeePwd } /> : null }
                </IconInputContainer>

                <ButtonContainer style={{ marginTop: 58 }}>
                    
                    { !isLoading ? 
                        <ButtonElementAction 
                            mode="contained" 
                            color="white"
                            onPress={ () => doLogin() }
                        >
                            Login
                        </ButtonElementAction> 
                        : 
                        <ActivityIndicator animating={ true } color={ Colors.white700 } />
                    }

                    <ButtonElementAction 
                        mode="text" 
                        color="white"
                        onPress={ () => navigation.navigate("SignUp") }
                    >
                        Sign Up
                    </ButtonElementAction>
                </ButtonContainer>
                
            </SafeAir>
        </AccountBackgroundForm>
    )
}
