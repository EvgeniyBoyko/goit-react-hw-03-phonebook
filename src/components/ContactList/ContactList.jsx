import React from 'react';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const contactElement = filterContacts.map(({ name, number, id }) => (
    <li key={id}>
      <p>{name}: {number} <button type="button" onClick={() => onDelete(name)}>Delete</button></p>
    </li>
  ));

  return <ul>{contactElement}</ul>;
};

export default ContactList;
 