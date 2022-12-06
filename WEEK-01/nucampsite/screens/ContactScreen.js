/**
 * ContactScreen
 */
import React from'react';
import { useState } from 'react';
import {
    Text, ScrollView
} from 'react-native';

// Styles

// Functional Component
const ContactScreen = () => {
    const [text, setText] = useState('');

    return (

        <ScrollView>
            <Text>Contact</Text>
        </ScrollView>

    );
};
export default ContactScreen;