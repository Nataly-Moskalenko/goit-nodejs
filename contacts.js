// const fs = require('fs').promises;
const fs = require('fs/promises');
const path = require('path');
// const contactsPath = './db/contacts.json';
const contactsPath = path.join(__dirname, 'db/contacts.json');

// const contactsPath = async () => {
//   await fs
//     .readFile('./db/contacts.json')
//     .then((data) => {
//       console.log(data.toString());
//       return data;
//     })
//     .catch((err) => console.log(err.message));
// };

const listContacts = async () => {
  await fs
    .readFile(contactsPath, 'utf-8')
    .then((data) => {
      // console.log(data.toString());
      console.log(data);
      return data;
      // return JSON.parse(data);
    })
    .catch((err) => console.log(err.message));
};

const getContactById = async (contactId) => {
  await fs
    .readFile(contactsPath, 'utf-8')
    .then((data) => {
      const foundedContact = [...data].filter((contact) => contactId === contact.id);
      console.log(foundedContact);
      return foundedContact;
    })
    .catch((err) => console.log(err.message));
};

function removeContact(contactId) {
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

// function addContact (name, email, phone) {
//   const addingContact = { name, email, phone };
// fs.appendFile(contactsPath, addingContact)
//   fs.readFile(contactsPath)
//     .then((data) => {
//       const afterAddContact = [...data, addingContact];
//       fs.writeFile(contactsPath, afterAddContact);
//       console.log(addingContact, afterAddContact);
//       return addingContact;
//     })
//     .catch((err) => console.log(err.message));
// };

// const contactFunctions = { listContacts, addContact, removeContact, getContactById };
// export default listContacts;

module.exports = { listContacts, getContactById };

// fs.readFile(filename, [options]) - читання файлу
// fs.writeFile(filename, data, [options]) - запис файлу
// fs.appendFile(filename, data, [options])- додавання у файл
// fs.rename(oldPath, newPath) - перейменування файлу.
// fs.unlink(path, callback) - видалення файлу.
