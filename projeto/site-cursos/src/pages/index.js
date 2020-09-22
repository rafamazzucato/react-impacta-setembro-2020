import React from 'react';
import { Menu } from '../components/Menu';
import { ContatoPage } from './Contato';
import { CursoPage } from './Curso';
import { Switch, Route} from 'react-router-dom';
import { HomePage } from './Home';

export class IndexPages extends React.Component {
    render() {
        return (
            <>
                <Menu/>
                <Switch>
                    <Route path="/cursos" component={CursoPage}/>
                    <Route path="/contato" component={ContatoPage}/>
                    <Route path="*" component={HomePage}/>
                </Switch>
            </>
        );
    }
}