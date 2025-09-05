import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        let generatedContacts = createFakeContact();
        const newContacts = [...contacts, generatedContacts];
        await writeContacts(newContacts);
    } catch (err) {
        console.log('Помилка додовання одного контакту', err);
    }
};

addOneContact();
