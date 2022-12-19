import {useEffect, useMemo, useRef} from "react";
import { Animated, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const FeaturedItem = (props) => {
    const { item } = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + item.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const campsites = useSelector((state) => state.campsites);
    const promotions = useSelector((state) => state.promotions);
    const partners = useSelector((state) => state.partners);

    const featCampsite = campsites.campsitesArray.find((item) => item.featured);
    const featPromotion = promotions.promotionsArray.find(
        (item) => item.featured
    );
    const featPartner = partners.partnersArray.find((item) => item.featured);

    // create a constant called scaleValue equal to a call to useRef passing in new Animated.Value(0) as an argument and access the .current property after the useRef call
    const scaleValue = useRef(new Animated.Value(0)).current;

    // Create another constant called scaleAnimation equal to a call to Animated.timing() passing in the following arguments:
    // scaleValue
    // An object with the following properties:
    // toValue equal to the number 1.
    // duration equal to the number 1500.
    // useNativeDriver equal to true.

    const scaleAnimation = Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
    });

    // Above the return statement use the useEffect hook passing in a function for
    // the first argument and an empty array for the second.
    // In the function body inside useEffect add a call to scaleAnimation.start().

    useEffect(() => {
        scaleAnimation.start();
    }, []);


    return (
        // Pass a style prop to the Animated.ScrollView setting
        // the transform property equal to an array with the following
        // object inside the array { scale: scaleValue }.
        <Animated.ScrollView
            style={{
                width: '100%',
                height: '100%',
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }}
        >

        <FeaturedItem
                item={featCampsite}
                isLoading={campsites.isLoading}
                errMess={campsites.errMess}
            />
            <FeaturedItem
                item={featPromotion}
                isLoading={promotions.isLoading}
                errMess={promotions.errMess}
            />
            <FeaturedItem
                item={featPartner}
                isLoading={partners.isLoading}
                errMess={partners.errMess}
            />
        </Animated.ScrollView>
    );
};

export default HomeScreen;
