import React, { useRef, useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Text, View, StyleSheet, Animated, Easing, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card, Tile } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'



export default function App() {
    const textFadeValue = useRef(new Animated.Value(1)).current;
    const textScaleValue = useRef(new Animated.Value(10)).current;
    const viewColorValue = useRef(new Animated.Value(0)).current;
    const viewPosYValue = useRef(new Animated.Value(0)).current;





    const animTextScale = Animated.timing(
        textScaleValue, {
            toValue: 30,
            duration: 2000,
            useNativeDriver: true
        }
    );

    const animViewColor = Animated.timing(
        viewColorValue,
        {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }
    );

    const animViewPosY = Animated.timing(
        viewPosYValue,
        {
            toValue: 1,
            duration: 2000,
            easing: Easing.bounce,
            useNativeDriver: true
        }
    );

    const bgColor = viewColorValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['blue', 'yellow', 'red']
    });

    const posY = viewPosYValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -100, -300]
    })




    const [isShown, setIsShown] = useState(true);

// Set Timing
    /*const animTextFade = Animated.timing(
        textFadeValue, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true

        }
    );
    */
    const handleClick = event => {
        setIsShown(current => !current);

        animTextFade = Animated.timing(
            textFadeValue, {
                toValue: 0,
                duration: 5000,


                useNativeDriver: true

            });


    }



    const fadeOut = textFadeValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0]
    });



    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Play around with the Animated code in the editor to learn more about how it works.
            </Text>
            <Button
                title="Click To Animate Text OPACITY"
                onPress={
                    () => {
                        animTextFade.start();
                    }
                }
                    handleClick


                }

            />
            <Button
                title="Click To Animate Text Scale"
                onPress={() => animTextScale.start()}
            />
            <Button
                title="Click To Animate View Color"
                onPress={() => animViewColor.start()}
            />
            <Button
                title="Click To Animate View Position Y"
                onPress={() => animViewPosY.start()}
            />
            <Card>


                <>
                    { isShown &&  (


                        <Animatable.View

                            style={{ padding: 20,  backgroundColor: bgColor, transform: [{ translateY: posY}]

                            }}>


                            <Animated.Text
                                style={{
                                    fontSize: textScaleValue,
                                    textAlign: 'center'}}>
                                Animate Me
                            </Animated.Text>

                        </Animatable.View>
                    )}
                </>


            </Card>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
