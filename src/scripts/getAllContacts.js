import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error("Помилка зчитування контактів:", err);
  } 
};

console.log(await getAllContacts());
