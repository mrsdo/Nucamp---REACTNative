/**
 * AboutScreen
 */

import React from'react';
import { useState } from 'react';
import {
    ScrollView,
    Text
} from 'react-native';


// Functional Component
const AboutScreen = () => {
    const [text, setText] = useState('');

    return (

        <ScrollView>
                <Text>About</Text>
        </ScrollView>

    );
};
export default AboutScreen;