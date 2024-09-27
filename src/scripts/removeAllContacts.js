import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
    const emptyArray = []; // Створюємо порожній масив
    await writeContacts(emptyArray); // Записуємо порожній масив у файл
    console.log('Видалено всі контакти.'); // Виводимо повідомлення
};

// Виклик функції
removeAllContacts();
