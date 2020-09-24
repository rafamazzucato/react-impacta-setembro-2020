import React from 'react';
import { Menu } from '../components/Menu';
import { ContatoPage } from './Contato';
import { CursoPage } from './Curso';
import { Switch, Route} from 'react-router-dom';
import { HomePage } from './Home';

import { connect } from 'react-redux';

class IndexPages extends React.Component {
    render() {
        const {usuarioAutenticadoId} = this.props;

        return (
            <>
                <Menu/>
                <Switch>
                     {usuarioAutenticadoId && <Route path="/cursos" component={CursoPage}/>}
                    <Route path="/contato" component={ContatoPage}/>
                    <Route path="*" component={HomePage}/>
                </Switch>
            </>
        );
    }
}

const mapStoreToProps = store => ({
    usuarioAutenticadoId: store.usuarioAutenticado._id
});

const conectado = connect(mapStoreToProps, null)(IndexPages);
export { conectado as IndexPages }