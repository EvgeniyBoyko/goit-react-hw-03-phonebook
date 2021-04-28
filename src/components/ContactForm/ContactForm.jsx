import React, { Component } from 'react';
import {initialState} from '../PhoneBook/initialState';
import { fields } from './fields';

class ContactForm extends Component {
    state = { ...initialState };

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;
        const { onSubmit } = this.props;
        onSubmit(name, number);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    };

    render() {
        const { name, number } = this.state;
        const {handleSubmit, handleChange} = this
        return (
             <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input {...fields.name}
                        onChange={handleChange}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" />
                </label>
                <label>
                    <p>Number</p>
                    <input {...fields.number}
                        onChange={handleChange}
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;