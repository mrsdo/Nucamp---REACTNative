/**
 * HomeScreen
 */
import React from'react';
import {
    ScrollView,
    View,
    Text
} from'react-native';
import { Card } from 'react-native-elements';

// Adding Redux
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

// Add Featured items Component
const FeaturedItem = ({item}) => {
    if (item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={{ uri: baseUrl + item.image }}>
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

/* Create a constant called campsites equal to a call to useSelector passing in an arrow function with state as the parameter and return state.campsites from the arrow function
*/
    const campsites = useSelector(state => state.campsites);
    const promotions = useSelector(state => state.promotions);
    const partners = useSelector(state => state.partners);

    // Add objects to hold featured items for campsites, partners and promotions
    const featCampsite = campsites.campsitesArray.find((item) => item.featured);
    const featPromotion = promotions.promotionsArray.find(
        (item) => item.featured
    );
    const featPartner = partners.partnersArray.find((item) => item.featured);


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
