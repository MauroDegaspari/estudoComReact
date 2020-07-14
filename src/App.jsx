import './app.css'

import React from 'react'

import Familia from './components/Familia'
import Card from './components/layout/Card'
import Pet from './components/Pet'
import Renda from './components/Renda'
import Lista from './components/Lista'

export default function App() {
    return (
        <div className="App">

        <h1> Dados da Familia</h1>

            <div className="Cards">
                <Card titulo="Familia">
                    <Familia></Familia>
                </Card>

                <Card titulo="pet">
                    <Pet></Pet>
                </Card>

                <Card titulo="Renda Familiar">
                    <Renda mau="3,500"></Renda>
                </Card>

                <Card titulo="Detalhamento">
                   <Lista></Lista>
                </Card>
            </div>
        </div>
    )
}