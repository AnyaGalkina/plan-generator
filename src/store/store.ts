import {combineReducers, createStore} from 'redux';
import {settingsReducer} from './settings-reducer';


const rootReducer = combineReducers({
    settings: settingsReducer
});

const  store = createStore(rootReducer);


export type AppRootStateType = ReturnType<typeof rootReducer>;
export type RootStateType = ReturnType<typeof store.getState>;
export default store;