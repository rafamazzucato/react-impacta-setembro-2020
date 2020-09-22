import React from 'react';

export class Componente2 extends React.Component {

    state = {
        nome : 'Rafael'
    }

    render() {
        return (
            <>
                <h1 className="fonte">Meu segundo componente</h1>
                <span>Nome:</span>
                <input type="text" value={this.state.nome}
                    onChange={e => this.setState({nome: e.target.value})}></input>
                <button type="reset" onClick={() => this.setState({nome: ''})}>Limpar</button>
            </>
        );
    }
}