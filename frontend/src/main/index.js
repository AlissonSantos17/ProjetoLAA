import React, { Component } from 'react'
import Form from '../components/Form/index'
import './styles.css'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Métodos de Ordenação</h1>
                <Form />
            </div>
        )
    }
}