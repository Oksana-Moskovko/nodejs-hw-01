import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        let contacts = await readContacts();
        if (contacts.length === 0) {
            return console.log('Помилка видалення, контакти відсутні.');
        }
        contacts.pop();
        await writeContacts(contacts);
        console.log('Останній контакт видалено.');
    } catch(err) {
        console.log('Помилка видалення останього контакту:', err);
    }
};

removeLastContact();
