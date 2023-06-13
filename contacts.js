const fs = require('fs').promises;
const path = require('path');

const contactsPath = require('./db/contacts.json');

export function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => {
      console.log(data.toString());
      return data;
    })
    .catch((err) => console.log(err.message));
}

export function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const foundedContact = data.filter((contact) => contactId === contact.id);
      console.log(foundedContact);
      return foundedContact;
    })
    .catch((err) => console.log(err.message));
}

export function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const removingContact = data.filter((contact) => contactId === contact.id);
      const afterRemoveContact = data.filter((contact) => contactId !== contact.id);
      fs.writeFile(contactsPath, afterRemoveContact);
      console.log(removingContact, afterRemoveContact);
      return removingContact;
    })
    .catch((err) => console.log(err.message));
}

export function addContact(name, email, phone) {
  const addingContact = { name, email, phone };

  fs.readFile(contactsPath)
    .then((data) => {
      const afterAddContact = [...data, addingContact];
      fs.writeFile(contactsPath, afterAddContact);
      console.log(addingContact, afterAddContact);
      return addingContact;
    })
    .catch((err) => console.log(err.message));
}

// fs.readFile(filename, [options]) - читання файлу
// fs.writeFile(filename, data, [options]) - запис файлу
// fs.appendFile(filename, data, [options])- додавання у файл
// fs.rename(oldPath, newPath) - перейменування файлу.
// fs.unlink(path, callback) - видалення файлу.
