import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { ListagemCursos} from '../components/curso/Listagem';

export class HomePage extends React.Component{
    render(){
        return(
            <div className={"container"}>
                <Cabecalho titulo={"Bem vindo ao cursos ABC"} 
                    subtitulo={"a melhor escola de cursos online"}/>
                <ListagemCursos isPublic={true}/>
            </div>
        )
    }
}