import axios from 'axios';
const URL = 'http://localhost:3200/api/usuarios'

export const SET_VALOR_LOGIN_TYPE = 'SET_VALOR_LOGIN_TYPE_';
export const SET_USUARIO_AUTENTICADO = 'SET_USUARIO_AUTENTICADO';

export const setValorLogin = (evento) => {
    const json =  {
        type: SET_VALOR_LOGIN_TYPE + evento.target.id.toUpperCase(),
        value : evento.target.value 
    }

    console.log(json)

    return json;
}

export const efetuarLogin = (login, password) => {
    return async dispatch => {
        try{
            if(!login || !password){
                alert('Favor informar login e senha');
                return;
            }

            const resultado = await axios.request({
                url : URL,
                method : 'GET',
                params :{
                    "login": login,
                    "senha": password
                }
            });
            console.log(resultado.data);
            if(resultado.data && resultado.data.length > 0){
                dispatch({
                    type: SET_USUARIO_AUTENTICADO,
                    value : resultado.data[0]._id
                });
                return
            }
            
            alert('Usuário não encontrado');
        }catch(e){
            console.log(e);
            alert('Não foi possível efetuar login');
        }
    }
}