import {combineReducers } from 'redux';
import contatoReducer from './reducers/contato';

const reducers = combineReducers({
    contato : contatoReducer
});

export default reducers;