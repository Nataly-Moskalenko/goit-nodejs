const contacts = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const removingContact = await contacts.removeContact(id);
      return console.log(removingContact);

    case 'update':
      const updatingContact = await contacts.updateContact(id, { name, email, phone });
      return console.log(updatingContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
