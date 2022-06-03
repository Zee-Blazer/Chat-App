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
    ButtonElementAction
} from '../components/form.style';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Components
import { IconedInput } from '../components/iconed-input.component';

export const LoginScreen = ({ navigation }) => {

    const { Login, isLoading } = useContext(AuthContext);

    const  [username, setUsername] = useState("");
    const  [password, setPassword] = useState("");

    const doLogin = () => {
        Login( username, password );
        // console.log("Okay")

        // navigation.navigate("SignUp")
    }

    return (
        <AccountBackgroundForm>
            <SafeAir>
                
                <LogoNameHeader />

                <IconInputContainer>
                    <FontAwesome5 name="user" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Username" 
                        autoCorrect={ false }
                        onChangeText={ setUsername }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <FontAwesome5 name="key" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Password" 
                        autoCorrect={ false }
                        secureTextEntry
                        onChangeText={ setPassword }
                    />
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
                : <ActivityIndicator animating={ true } color={ Colors.white700 } />
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
