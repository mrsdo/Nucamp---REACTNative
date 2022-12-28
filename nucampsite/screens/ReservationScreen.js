import { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Switch,
    Button,
    Alert, Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
import * as Notifications from 'expo-notifications';




const ReservationScreen = () => {
    const [campers, setCampers] = useState(1);
    const [hikeIn, setHikeIn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);


    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleReservation = () => {
        const numCampers = `Number of Campers:  ${campers}`
        const hikedIn = `Hike-In?  ${hikeIn}`
        const resDate = `Date:  ${date.toLocaleDateString("en-US")}`


        Alert.alert(
            'Begin Search?',
            numCampers + "\n" + hikedIn + "\n" + resDate,

            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        console.log('Reservation Search Canceled');
                        resetForm();
                    },
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        presentLocalNotification(
                            date.toLocaleDateString('en-US')
                        ).then(r => {
                            console.log(r);
                        });
                        resetForm();
                    }
                }
            ],
            { cancelable: false }
        );
        console.log('campers:', campers);
        console.log('hikeIn:', hikeIn);
        console.log('date:', date);
    };

    const resetForm = () => {
        setCampers(1);
        setHikeIn(false);
        setDate(new Date());
        setShowCalendar(false);
    };

    // Below the resetForm function create a new async function called presentLocalNotification with a parameter called reservationDate.
    const presentLocalNotification = async (reservationDate) => {
        const sendNotification = () => {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySound: true,
                    shouldSetBadge: true
                })
            });

            Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Your Campsite Reservation Search',
                    body: `Search for ${reservationDate} requested for ${campers}`,
                },
                trigger: null
            });
            console.log('notification scheduled');
        };

        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
            console.log('permissions granted');
        }
        if (permissions.granted) {
            sendNotification();
            console.log('notification sent');
        }
    };


    return (
        <ScrollView>
            <Animatable.View animation='zoomIn' duration={2000} delay={1000}>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of Campers:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={campers}
                        onValueChange={(itemValue) => setCampers(itemValue)}
                    >
                        <Picker.Item label='1' value={1} />
                        <Picker.Item label='2' value={2} />
                        <Picker.Item label='3' value={3} />
                        <Picker.Item label='4' value={4} />
                        <Picker.Item label='5' value={5} />
                        <Picker.Item label='6' value={6} />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Hike In?</Text>
                    <Switch
                        style={styles.formItem}
                        value={hikeIn}
                        trackColor={{ true: '#5637DD', false: null }}
                        onValueChange={(value) => setHikeIn(value)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date:</Text>
                    <Button
                        onPress={() => setShowCalendar(!showCalendar)}
                        title={date.toLocaleDateString('en-US')}
                        color='#5637DD'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
                {showCalendar && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={date}
                        mode='date'
                        display='default'
                        onChange={onDateChange}
                    />
                )}
                <View style={styles.formRow }>
                    <View style={styles.formButton}>
                    <Button
                        onPress={() => handleReservation()}
                        title='Search Availability'
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        color='#ffffff'
                        containerStyle={styles.formButton}
                        accessibilityLabel='Tap me to search for available campsites to reserve'

                    />
                    </View>
                </View>
            </Animatable.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    formButton: {
        margin: 40,
        width: 230,
        backgroundColor: '#5637DD',
        borderWidth: 2,
        borderColor: '#472EB8',
        borderRadius: 10,

    },
});

export default ReservationScreen;