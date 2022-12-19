/**
 * M. Dolce: marti.dolce@29signals.org | December 6, 2022 | React Native | Zoom: https://us06web.zoom.us/j/83235/586129
 * ContactScreen
 */
import React from'react';
import {
   ScrollView,
    StyleSheet,

} from 'react-native';
import { Card, Text } from '@rneui/themed';
import * as Animatable from 'react-native-animatable'

// Styles

// Functional Component
const ContactScreen = () => {

    return (

        <ScrollView>

                <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                >
                <Card wrapperStyle={{margin: 20}}>
                    <Card.Title>Address</Card.Title>
                        <Card.Divider />
                    <Text style={styles.fonts}>
                        1 Nucamp Way
                    </Text>
                    <Text style={styles.fonts}>
                        Seattle, WA 98001
                    </Text>
                    <Text style={styles.fonts}>
                        U.S.A.
                    </Text>

                </Card>
                </Animatable.View>



        </ScrollView>

    );
};

// Playing with Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 10,
    }
});
export default ContactScreen;