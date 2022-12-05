import * as React from 'react';
import { View } from 'react-native';
import FilmCatalogue from './components/FilmCatalogueComponent';
import FilmCatalogue2 from './components/FilmCatalogueViewComponent'

// You can import from local files
/* Go to components/FilmCatalogueComponent.js for your code challenge. App.js does not need any updates. */

function App () {
    return (
        <View>
            <FilmCatalogue />
            <FilmCatalogue2 />
        </View>
    );
}

export default App;