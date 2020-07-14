import React from 'react';
import Listas from '../data/lista';
import "./lista.css"

export default props => {

    const ExporLista = Listas.map(lista => {
        return (
            <tr>
                <th>{lista.id}</th>
                <th>{lista.nome}</th>
                <th>R$ {lista.preco}</th>
            </tr>
        )
    })


    return (
        <div className="table">

            <table >
                <thread >
                    <tr>
                        <th>Id Produto</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                    <tbody>
                        {ExporLista}
                    </tbody>
                </thread>

            </table>

        </div>
    );

}

