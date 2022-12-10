/**
 * DirectoryScreen.js
 */
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

/**
 * Create a constant named DirectoryScreen equal to an arrow function, passing in one parameter named props.
 */
const DirectoryScreen = ( props ) => {

    const renderDirectoryItem = ({ item: campsite }) => {

        return (
            <ListItem>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={props.campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;