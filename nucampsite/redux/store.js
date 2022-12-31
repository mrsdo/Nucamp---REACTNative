/*
*  store.js
 * M.Dolce 12.20.2022, http://micropython.org/
 */
import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a const called config equal to an object with the following properties:
// key equal to the string 'root'.
// storage equal to AsyncStorage.
// debug equal to true.
const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
};
export const store = configureStore({
    /*  In the object that is being passed to configureStore pass the reducer
     *  map object that is currently set equal to the reducer property to a call to persistCombineReducers
     *  as the second argument. Pass in config as the first argument.
     */
    reducer: persistCombineReducers(config, {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        favorites: favoritesReducer
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});
// Export a constant called persistor equal to a call to persistStore(store).
export const persistor = persistStore(store);