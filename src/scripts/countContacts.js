import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
    const contacts = await readContacts(); // Зчитуємо контакти з файлу
    const count = contacts.length; // Рахуємо кількість контактів
    console.log(`Кількість контактів: ${count}`); // Виводимо кількість контактів
};

// Виклик функції
countContacts();
