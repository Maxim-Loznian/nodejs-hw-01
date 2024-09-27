import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
    const contacts = await readContacts(); // Зчитуємо наявні контакти
    const newContact = createFakeContact(); // Створюємо новий контакт
    contacts.push(newContact); // Додаємо новий контакт до масиву
    await writeContacts(contacts); // Записуємо контакти назад у файл
    console.log('Додано новий контакт:', newContact); // Виводимо повідомлення
};

// Виклик функції
addOneContact();
