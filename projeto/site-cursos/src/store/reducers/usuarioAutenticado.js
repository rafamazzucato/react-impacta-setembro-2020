
import { SET_VALOR_LOGIN_TYPE, SET_USUARIO_AUTENTICADO } from '../actions/usuarioAutenticado';

const INITIAL_STATE = {
    login: '',
    senha: '',
    _id : null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_VALOR_LOGIN_TYPE+'LOGIN': return {...state, login : action.value}
        case SET_VALOR_LOGIN_TYPE+'PASSWORD': return {...state, senha : action.value}
        case SET_USUARIO_AUTENTICADO : return {...state, _id : action.value}
        default : return state;
    }
}