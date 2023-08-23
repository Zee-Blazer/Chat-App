import React, { useContext, useState } from 'react';
import { Text } from 'react-native';

// Loader
import { ActivityIndicator, Colors } from 'react-native-paper';

// Safe Area View
import { SafeAir } from '../../../Components/Utility/safe-area.component';

// Header Logo Name component
import { LogoNameHeader } from '../components/logo-name.component';

// Authentication Context
import { AuthContext } from '../../../Services/Authentication/auth.context';

// Password Viewer component
import { SeePassword } from '../components/see-password.component';

// Styled components
import { 
    AccountBackgroundForm,
    IconInputContainer,
    UserInfoInput,
    ButtonContainer,
    ButtonElementAction,
    ErrorMsg
} from '../components/form.style';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Components
import { IconedInput } from '../components/iconed-input.component';

export const SignupScreen = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [seePwd, setSeePwd] = useState(true);

    const { isLoading, SignUp, errMsg } = useContext(AuthContext);

    // Functions
    console.log(isLoading)

    const doSignUp = () => {
        SignUp(email, pwd, username);
        // setIsLoading
    }

    return (
        <AccountBackgroundForm>
            <SafeAir>
                
                <LogoNameHeader />

                <ErrorMsg> { errMsg } </ErrorMsg>

                <IconInputContainer>
                    <FontAwesome5 name="user" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Username" 
                        autoCorrect={ false }
                        value={ username }
                        onChangeText={ setUsername }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <MaterialIcons name="email" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="E-mail" 
                        autoCorrect={ false }
                        value={ email }
                        autoCapitalize='none'
                        onChangeText={ setEmail }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <FontAwesome5 name="key" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Password" 
                        autoCorrect={ false }
                        secureTextEntry={ seePwd }
                        value={ pwd }
                        onChangeText={ setPwd }
                    />
                    { pwd ? <SeePassword seePwd={ seePwd } setSeePwd={ setSeePwd } /> : null }
                </IconInputContainer>

            
            <ButtonContainer>
                { !isLoading ? 
                    <ButtonElementAction 
                        mode="contained" 
                        color="white"
                        onPress={ () => doSignUp() }
                    >
                        Sign Up
                    </ButtonElementAction>
                :
                    <ActivityIndicator animating={ true } color={ Colors.white700 } />
                }
                <ButtonElementAction 
                    mode="text" 
                    color="white" 
                    onPress={ () => navigation.navigate("Login") }
                >
                    Login
                </ButtonElementAction>
            </ButtonContainer>
                
            </SafeAir>
        </AccountBackgroundForm>
    )
}
