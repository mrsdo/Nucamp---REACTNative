/*
 * ../screens/LoginScreen.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file is uses the SecureStore API to store login credentials
 * ------------
 */

import {useEffect, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {CheckBox, Input} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

// Create a function component called LoginScreen with an empty parameter list and export the component at the bottom of the file.
export default function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

//add an event handler function called handleLogin and use console log statements to print out values of username, password, and remember to the console.
    const handleLogin = () => {
        console.log('username:', username);
        console.log('email:', email);
        console.log('password:', password);
        console.log('rememberMe:', rememberMe);
        if (rememberMe) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            ).catch((error) => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) => console.log('Could not remove user info', error));
        }
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUsername(userinfo.username);
                setEmail(userinfo.email);
                setPassword(userinfo.password);
                setRememberMe(true);
            }
        });
    }, []);


//Add a return statement at the bottom of the LoginScreen function body and return a View component at the top level with a style prop equal to the custom style styles.container.

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <Input
                    placeholder='Username'
                    leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />

                {/*NOTE: MY EXTRA*** Add another Input component below the last one with the following props:
                    placeholder equal to the string 'envelope'. leftIcon equal to an object with a type property
                    of 'font-awesome' and a name property of 'email'. onChangeText equal to a function with
                    text as the parameter and a call to setEmail(text) in the body. value equal to email. A
                    containerStyle equal to the custom style styles.formInput. leftIconContainerStyle equal to
                    the custom style styles.formIcon.*/}

                <Input
                    placeholder='Email'
                    leftIcon={{type: 'font-awesome', name: 'envelope'}}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />


                {/*//Add another Input component below the last one with the following props: placeholder equal
                to the string 'Password'. leftIcon equal to an object with a type property of
                'font-awesome' and a name property of 'key'. onChangeText equal to a function with text as
                the parameter and a call to setPassword(text) in the body. value equal to password.
                containerStyle equal to the custom style styles.formInput. leftIconContainerStyle equal to
                the custom style styles.formIcon.*/}
                <Input
                    placeholder='Password'
                    leftIcon={{type: 'font-awesome', name: 'key'}}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />

               {/* //Below the second Input add a CheckBox component with a self-closing tag with the following
                props:
                // title equal to the string 'Remember Me'.
                // center as a Boolean prop equal to nothing.
                // checked equal to remember.
                // onPress equal to a function with no parameters and a call to setRemember(!remember) in
                the body.
                // containerStyle equal to the custom style styles.formCheckbox.*/}
                <CheckBox
                    title='Remember Me'
                    center
                    checked={rememberMe}
                    onPress={() => setRememberMe(!rememberMe)}
                    containerStyle={styles.formCheckbox}
                />

                {/*//Below the checkbox but still between the View tags add another View component with a style
                prop equal to the custom
                style styles.formButton.
                // Inside the new View add a Button component with a self-closing tag with the following
                props:
                // onPress equal to a function that calls the handleLogin event handler.
                // title equal to the string 'Login'.
                // color equal to the string '#5637DD'.
                // containerStyle equal to the custom style styles.formButton.*/}

                <View style={styles.formButton}>
                    <Button
                        title='Login'
                        color='#5637DD'
                        onPress={() => handleLogin()}
                        containerStyle={styles.formButton}
                    />
                </View>
            </View>
        </View>
    );

};
//At the bottom of the file outside the LoginScreen function body create a constant called
// styles equal to StyleSheet.create() passing an object with the following style rules:
// container
// justifyContent: 'center'
// margin: 20
// formIcon
// marginRight: 10
// formInput
// padding: 10
// formCheckbox
// margin: 10
// backgroundColor: null
// formButton
// margin: 40
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 10
    },
    formCheckbox: {
        margin: 10,
        backgroundColor: null
    },
    formButton: {
        margin: 40
    },
    inputContainer: {
        backgroundColor:'lightgray',
   },
});
export default LoginScreen;