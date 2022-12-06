/**
 * AboutScreen
 */

import React from'react';
import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {Card, Text} from '@rneui/themed';

// Add Mission component to show text


// Functional Component
const AboutScreen = () => {

    const missionStatement =
        'We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. ' + "\n"+ "\n" +
        'We increase access to adventure for the public while promoting safe and respectful use of resources. ' + "\n"+ "\n" +
        'The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. ' + "\n"+ "\n" +
        'We also present a platform for campers to share reviews on campsites they have visited with each other.'



    return (

        <ScrollView>
            <View style={styles.container}>
                <Card wrapperStyle={{margin: 20}}>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Divider />
                    <Text style={styles.fonts}>
                        {missionStatement}
                    </Text>

                </Card>

            </View>

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
export default AboutScreen;