/**
 * Campsite Information Screen
 */
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { COMMENTS } from '../shared/comments';
import RenderCampsite from '../features/campsites/RenderCampsite';

/**
 *
 * @constructor Campsite Information
// Set up the function component as an arrow function set equal to a const named CampsiteInfoScreen, passing one parameter of props to the arrow function.
 */
const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;

    //Create a state variable called comments and a setting function called setComments with the useState hook, passing the COMMENTS array as the initial value for the state variable.
    const [comments, setComments] = useState(COMMENTS);
    const [favorite, setFavorite] = useState(false);
    /**
     *
     * @param {string} id
     * @returns {void}
     */

    const renderCommentItem = ({ item }) => {
        return (
            <View style={styles.commentItem}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>
                    {`-- ${item.author}, ${item.date}`}
                </Text>
            </View>
        );
    };

    return (
        <FlatList
            data={comments.filter(
                (comment) => comment.campsiteId === campsite.id
            )}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
                marginHorizontal: 20,
                paddingVertical: 20
            }}
            ListHeaderComponent={
                <>
                    <RenderCampsite
                        campsite={campsite}
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
                    />
                    <Text style={styles.commentsTitle}>Comments</Text>
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    }
});

export default CampsiteInfoScreen;