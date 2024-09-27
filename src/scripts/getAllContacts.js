import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
    const contacts = await readContacts(); // Зчитуємо контакти з файлу
    console.log('Контакти:', contacts); // Виводимо масив контактів
};

// Виклик функції
getAllContacts();
