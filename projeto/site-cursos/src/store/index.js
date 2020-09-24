import {combineReducers } from 'redux';
import contatoReducer from './reducers/contato';
import cursoReducer from './reducers/curso';
import userAuthReducer from './reducers/usuarioAutenticado';

const reducers = combineReducers({
    contato : contatoReducer,
    curso : cursoReducer,
    usuarioAutenticado : userAuthReducer
});

export default reducers;