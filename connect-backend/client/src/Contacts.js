import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Contacts extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        axios.get('/api/contacts')
            .then(response => {
                console.log(response);
                this.setState({
                    contacts: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        console.log('render');
        if (this.state.contacts.length === 0) return <h3>Loading...</h3>
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Contacts</h1>
                    {this.state.contacts.map(contact => {
                        return (
                            <Link>
                                <h3 key={contact.id}>{contact.name}</h3>
                            </Link>
                        )
                    })}
                </header>
            </div>
        );
    }
}
