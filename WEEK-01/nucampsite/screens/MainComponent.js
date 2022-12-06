/**
 * MainComponent
 */

import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

//Create a function component named DirectoryNavigator above the Main function component.
const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>

            ); //End Return
};

// Create a constant named Main set equal to an arrow function and export Main at the bottom of this file outside of the arrow function body.
const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <DirectoryNavigator />
        </View>
    );
};

export default Main;
