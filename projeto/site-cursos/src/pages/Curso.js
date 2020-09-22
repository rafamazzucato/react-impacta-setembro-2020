import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import { AgrupamentoCurso } from '../components/curso/Agrupamento';

export class CursoPage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <Cabecalho titulo={"Cursos"}
                    subtitulo={"cadastro de cursos"} />
                <AgrupamentoCurso />
            </div>
        );
    }
}