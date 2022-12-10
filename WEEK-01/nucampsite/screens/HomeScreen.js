/**
 * HomeScreen
 */
import React from'react';
import { useState } from 'react';
import {
    ScrollView,
    View,
    Text
} from'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

// Add Featured items Component
const FeaturedItem = ({item}) => {
    if (item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={item.image} >
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                        }}>
                            {item.name}

                        </Text>
                    </View>
                </Card.Image>
                <Text
                    style={{
                        margin: 20
                }}>
                    {item.description}

                </Text>
            </Card>
        )
    }
    return <View />;
}

const HomeScreen = () =>{
    // Create state variables for:
    const [campsites] = useState(CAMPSITES);
    const [promotions] = useState(PROMOTIONS);
    const [partners] = useState(PARTNERS);

    // Add objects to hold featured items for campsites, partners and promotions
    const featCampsite = campsites.find((item) => item.featured);
    const featPromotion = promotions.find((item) => item.featured);
    const featPartner = partners.find((item) => item.featured);


    return (
        //ScrollView loads all child components at once v FlatList is a better choice if list is longer
        <ScrollView>
            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPartner} />
        </ScrollView>
    );

};
export default HomeScreen;
