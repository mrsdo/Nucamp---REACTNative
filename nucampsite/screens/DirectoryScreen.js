import {ScrollView, FlatList, Text, View, StyleSheet} from 'react-native';
import { Tile } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable'
import { Card } from '@rneui/themed';
const DirectoryScreen = ({ navigation }) => {
    const campsites = useSelector((state) => state.campsites);

    if (campsites.isLoading) {
        return <Loading />;
    }
    if (campsites.errMess) {
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            // In the renderDirectoryItem function wrap the Tile component with an Animatable.View component with the following props:
            // animation equal to the string 'fadeInRightBig'.
            // duration equal to the number 2000.
            <View style={{

                backgroundColor: 'white',
                borderBottomColor: 'black',
                padding: 3,
                margin: 3,



            }}>
                <ScrollView style={{
                    paddingVertical: 5,
                    paddingHorizontal: 5



                }}>
            <Animatable.View
                animation="fadeInRightBig"
                duration={2000}
                key={campsite.id}

            >

            <Tile
                width={375}

                title={campsite.name}
                titleStyle={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
                caption={campsite.description}
                featured
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })

                }
                imageSrc={{uri: baseUrl + campsite.image
            }}

            />

            </Animatable.View>
            </ScrollView>
            </View>
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};
// Playing with Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 10,
    }
});
export default DirectoryScreen;
