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

export const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [conPwd, setConPwd] = useState("");

    const { isLoading, SignUp } = useContext(AuthContext);

    // Functions

    const doSignUp = () => {
        SignUp(email, pwd, conPwd);
    }

    return (
        <AccountBackgroundForm>
            <SafeAir>
                
                <LogoNameHeader />

                {/* <IconInputContainer>
                    <FontAwesome5 name="user" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Username" 
                        autoCorrect={ false }
                        value={ username }
                        onChangeText={ setUsername }
                    />
                </IconInputContainer> */}

                <IconInputContainer>
                    <MaterialIcons name="email" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="E-mail" 
                        autoCorrect={ false }
                        value={ email }
                        onChangeText={ setEmail }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <FontAwesome5 name="key" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Password" 
                        autoCorrect={ false }
                        secureTextEntry
                        value={ pwd }
                        onChangeText={ setPwd }
                    />
                </IconInputContainer>

                <IconInputContainer>
                    <FontAwesome5 name="keycdn" size={24} color="white" />
                    <UserInfoInput 
                        placeholder="Confirm-Password" 
                        autoCorrect={ false }
                        secureTextEntry
                        value={ conPwd }
                        onChangeText={ setConPwd }
                    />
                </IconInputContainer>

                { !isLoading ? 
                    <ButtonContainer>
                        <ButtonElementAction 
                            mode="contained" 
                            color="white"
                            onPress={ () => doSignUp() }
                        >
                            Sign Up
                        </ButtonElementAction>

                        <ButtonElementAction 
                            mode="text" 
                            color="white" 
                            onPress={ () => navigation.navigate("Login") }
                        >
                            Login
                        </ButtonElementAction>
                    </ButtonContainer>
                :
                    <ActivityIndicator animating={ true } color={ Colors.white700 } />
                }
                
            </SafeAir>
        </AccountBackgroundForm>
    )
}