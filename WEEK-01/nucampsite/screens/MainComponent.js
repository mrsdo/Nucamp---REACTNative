import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';

// Create a constant named Main set equal to an arrow function and export Main at the bottom of this file outside of the arrow function body.
const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    /**
     * Return the DirectoryScreen tag from the return statement passing a single prop named campsites equal to the campsites state variable.
      */
    return

    <DirectoryScreen campsites={campsites} />;

};
export default Main;
