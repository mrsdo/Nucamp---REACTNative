import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card, Rating } from 'react-native-elements';

export default function App() {

    const [rating, setRating] = useState(5);
    const [submittedMsg, setSubmittedMsg] = useState('Submitted Rating: ' + rating);
    /* Code Challenge Resources
    * https://www.npmjs.com/package/react-native-ratings
    */
    return (
        <View style={styles.container}>a
            <Card>
                <Text>Overall Rating</Text>
                <Rating
                    type='rocket'
                    startingValue={3}
                    ratingCount={10}
                    imageSize={20}
                    readonly
                    style={{alignItems: 'center', padding: 10}}
                />
                <Text>Submit Your Rating</Text>
                <Rating
                    type='rocket'
                    showRating
                    fractions={1}
                    startingValue={5.6}
                    ratingCount={10}
                    imageSize={20}
                    //startingValue={rating}
                    style={{alignItems: 'center'}}
                    onFinishRating={newRating => setRating(newRating)}
                />
                <View style={{margin: 20}}>
                    <Button
                        //Add an onPress prop to the Button component so that when the button is clicked, the setter function of setSubmittedMsg() is called to update the submittedMsg state value to the string
                        onPress={() => setSubmittedMsg(
                            'Submitted Rating:'+ rating
                        )}
                        color='#5637DD'
                        title='Submit'
                    />
                </View>
                <View style={{margin: 10}}>
                    <Text>
                        {submittedMsg}
                    </Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
});
