import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await getAllContacts();
        return console.log('Кількість контактів:', contacts.length);

      } catch (err) {
        console.error("Помилка рахунку контактів:", err);
      } 
};

console.log(await countContacts());
