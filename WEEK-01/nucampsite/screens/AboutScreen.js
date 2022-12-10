/**
 * M. Dolce: marti.dolce@29signals.org | December 6, 2022 | React Native | Zoom: https://us06web.zoom.us/j/83235/586129
 * AboutScreen
 */

import React from'react';
import { useState } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Text, ListItem } from '@rneui/themed';
import { PARTNERS } from '../shared/partners';

// Add PartnerList Component




// Functional Component
const AboutScreen = () => {
    const missionStatement =
        'We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. ' + "\n"+ "\n" +
        'We increase access to adventure for the public while promoting safe and respectful use of resources. ' + "\n"+ "\n" +
        'The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. ' + "\n"+ "\n" +
        'We also present a platform for campers to share reviews on campsites they have visited with each other.'


 // Adding Partners
    const [partner] = useState(PARTNERS)


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
            <View style={styles.container}>
                <Card wrapperStyle={{margin: 5}}>
                    <Card.Title>Community Partners</Card.Title>
                    <Card.Divider />
                    {
                        partner.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar rounded style={styles.Avatar} source={l.image} />

                                <ListItem.Content>
                                    <ListItem.Title style={styles.Title}>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle style={styles.description}>{l.description}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }

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
        marginBottom: 10
    },
    Avatar: {
        width: 35,
        height: 35,
        marginRight: -6
    },
    Title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 12,

    }
});
export default AboutScreen;