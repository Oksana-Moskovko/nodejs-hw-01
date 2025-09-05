import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        let generatedContacts = [];

        for(let i = 0; i < number; i ++){
        generatedContacts.push(createFakeContact());
        }
    
        const newContacts = [...contacts, ...generatedContacts];
        await writeContacts(newContacts);
        console.log('Нові контакти додано');
        
    } catch(err) {
        console.log("Помилка додавання нових контактів:", err);
    }   
};

generateContacts(5);
