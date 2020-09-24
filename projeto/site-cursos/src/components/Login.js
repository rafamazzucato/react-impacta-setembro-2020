import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setValorLogin,
    efetuarLogin
} from '../store/actions/usuarioAutenticado'

const Login = props => {
    return (
        <div className="row m-2">

            {
                props.usuarioAutenticadoId ?
                    <span>Bem vindo, {props.login}</span>
                :
                    <>
                        <div className="form-group row mr-4">
                            <label htmlFor="login" className="col-form-label mr-1">Login:</label>
                            <div>
                                <input type="text" className="form-control" id="login"
                                    value={props.login}
                                    onChange={props.setValorLogin}
                                />
                            </div>
                        </div>

                        <div className="form-group row mr-1">
                            <label htmlFor="password" className="col-form-label mr-1">Senha:</label>
                            <div>
                                <input type="password" className="form-control" id="password"
                                    value={props.password}
                                    onChange={props.setValorLogin}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary ml-3"
                                onClick={() => props.efetuarLogin(props.login, props.password)}>
                                Entrar
                </button>
                        </div>
                    </>
            }

        </div>
    )
}

const mapStoreToProps = store => ({
    login: store.usuarioAutenticado.login,
    password: store.usuarioAutenticado.senha,
    usuarioAutenticadoId: store.usuarioAutenticado._id
});

const mapActionToProps = dispatch => bindActionCreators({
    setValorLogin,
    efetuarLogin
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(Login);
export { conectado as Login }