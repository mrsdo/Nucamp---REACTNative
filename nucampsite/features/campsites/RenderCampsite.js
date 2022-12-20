import { useRef } from 'react';
import {PanResponder,  Alert,  StyleSheet, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {baseUrl} from '../../shared/baseUrl';
import * as Animatable from 'react-native-animatable'

const RenderCampsite = (props) => {

    const {campsite} = props;

/*  Add a constant called isLeftSwipe equal to an arrow function that
*   destructures dx in the parameter list and returns the boolean expression dx < -200.
*/

    // create a constant called view equal to useRef().
    const view = useRef();

    const isLeftSwipe = ({ dx }) => dx < -200;

/*  create a constant called panResponder equal to a call to PanResponder.create() passing an object as the
*   argument with the following properties:
*   onStartShouldSetPanResponder equal to an arrow function that returns true.
*   onPanResponderEnd equal to an arrow function with two parameters of e as the first and gestureState as the second.
*/
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,

/*  Add a new panHandler inside the PanResponder.create object called onPanResponderGrant equal to an arrow function.
*   You can put this right after the onStartShouldSetPanResponder line.
*/
        onPanResponderGrant: () => {
            view.current
                .rubberBand(1000)
                .then((endState) =>
                    console.log(endState.finished ? 'finished' : 'canceled')
                );
        },

        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (isLeftSwipe(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' +
                    campsite.name +
                    ' to favorites?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () =>
                                props.isFavorite
                                    ? console.log('Already set as a favorite')
                                    : props.markFavorite()
                        }
                    ],
                    { cancelable: false }
                );
            }
        }
    });
    if (campsite) {
        return (
            // In the return statement inside the if block, wrap the Card component with an Animatable.View component with the following props:
            // animation equal to the string 'fadeInDownBig'.
            // duration equal to the number 2000.
            // delay equal to the number 1000.
            <Animatable.View
                animation='fadeInDownBig'
                duration={2000}
                delay={1000}
                ref={view}
                {...panResponder.panHandlers}
            >
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={{uri: baseUrl + campsite.image}}>
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={styles.cardText}>
                            {campsite.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{margin: 20}}>{campsite.description}</Text>
                <View style={styles.cardRow}>
                    <Icon
                        name={props.isFavorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() =>
                            props.isFavorite
                                ? console.log('Already set as a favorite')
                                : props.markFavorite()
                        }
                    />
                    <Icon
                        name='pencil'
                        type='font-awesome'
                        color='#5637DD'
                        raised
                        reverse
                        onPress={() => props.onShowModal()}
                    />
                </View>
            </Card>
            </Animatable.View>
        );
    }
    return <View/>;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 10
    },
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }

});

export default RenderCampsite;
