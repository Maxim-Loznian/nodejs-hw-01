import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Оголошення функції
const generateContacts = async (number) => {
    const contacts = await readContacts(); // Зчитуємо наявні контакти
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact()); // Додаємо новий контакт
    }
    await writeContacts(contacts); // Записуємо контакти назад у файл
    console.log(`Додано ${number} нових контактів!`); // Виводимо повідомлення
};

// Виклик функції з параметром 5
generateContacts(5);

