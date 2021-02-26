import React, { Component } from 'react'
import axios from 'axios';

export default class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        const id = this.props.match.params.contactId;
        axios.get(`/api/contacts/${id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    contact: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (this.state.contact === null) {
            return <h3>Loading</h3>
        }
        return (
            <h3>
                Contact Details
                <p>{this.state.contact.name}</p>
            </h3>
        )
    }
}
