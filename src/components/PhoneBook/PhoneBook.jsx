import React, { Component } from 'react';
import shortid from 'shortid';

import { initialState } from "./initialState";
import Section from '../Section/index';
import ContactForm from '../ContactForm/index';
import ContactList from '../ContactList/index';
import Filter from '../Filter/index';

class PhoneBook extends Component {

    state = { ...initialState };

    addContact = (name, number) => {
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };
        const { contacts } = this.state;

        const result = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
        if (result) {
            alert(`${name} is already in contacts`);
        } else {
            const newContacts = [...contacts];
            newContacts.push(newContact);

            this.setState({ contacts: newContacts });
        }
    };

    onDelete = (idx) => {
        this.setState(({ contacts }) => {
            const newList = [...contacts];
            newList.splice(idx, 1);
            return {
                contacts: newList,
            }
        });
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    componentDidMount() {
        const contactsList = JSON.parse(localStorage.getItem('contacts'));
        this.setState({
            contacts: contactsList || [],
        });
    };

    componentDidUpdate() {
        const { contacts } = this.state;
        const contactsList = JSON.stringify(contacts);
        localStorage.setItem('contacts', contactsList);
    };

    render() {
        const { contacts, filter } = this.state;
        const { addContact, onDelete, changeFilter } = this;

        return (
            <>
                <Section title={'PhoneBook'}>
                    <ContactForm onSubmit={addContact} />
                </Section>
                <Section title={'Contacts'}>
                    <Filter value={filter} changeFilter={changeFilter}/>
                    <ContactList
                        contacts={contacts}
                        filter={filter}
                        onDelete={onDelete} />
                </Section>
            </>
        );
    }
};

export default PhoneBook;
