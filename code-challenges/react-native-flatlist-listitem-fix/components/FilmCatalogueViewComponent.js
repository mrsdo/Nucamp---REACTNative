import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Card, Avatar } from 'react-native-elements';
import { FILMS } from '../shared/films';

/*
 When working correctly, the emulator to the right will show a list of films from shared/films.js.
 Before updating this code:
  - You must be logged into your Expo account (create an account if you do not have one already)
  - Use the Save button on the upper right corner to fork this Snack to your account. Name it as you please, or accept the default random name.
 Share the link to your version in the forum for this code challenge.

 Your challenges:  1. Fix the component by adding a call to useState to create a loca state variable named films. Use the imported FILMS array as its initial value.
                   2. Inside the ListItem tags, add the film title as the title, and the director as the subtitle.
                   3. Update films.js to add a third film of your choice.
 Bonus Challenge: Write a custom view in the ListItem subtitle to show more details about each film, such as the release year, genre, language.
*/
const FilmCatalogue2 = () => {
    const [films, setFilms] = useState(FILMS);
    // Add your useState call here to define a local state variable named films

    const renderFilm = ({item}) => {
        return (
            <ListItem bottomDivider>
                <Avatar source={{uri: item.avatar_url}} />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.director}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <Card title="Film Catalogue">
            <FlatList
                data={films}
                renderItem={renderFilm}
                keyExtractor={item=>item.id.toString()}
            />
        </Card>
    );
};

export default FilmCatalogue2;