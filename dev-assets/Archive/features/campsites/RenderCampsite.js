/**
 * RenderCampsite
 */

import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

const RenderCampsite = ({campsite}) => {
    if (campsite) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={campsite.image}>

                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {campsite.name}
                        </Text>

                    </View>
                </Card.Image>
                // Add Text Component for Description
                <Card.Description>
                    <Text style={{ margin: 20 }}>{campsite.description}
                    </Text>
                </Card.Description>
            </Card>
        ); // return
    } // if
    return <View />;
};
export default RenderCampsite;