/**
 * Campsite Information Screen
 */
import RenderCampsite from '../features/campsites/RenderCampsite';

/**
 *
 * @constructor Campsite Information
// Set up the function component as an arrow function set equal to a const named CampsiteInfoScreen, passing one parameter of props to the arrow function.
 */
const CampsiteInfoScreen = (props) => {

    return (
        <RenderCampsite campsite={} {props.campsite} />
    );
};

export default CampsiteInfoScreen;