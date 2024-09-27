import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
    const contacts = await readContacts(); // Зчитуємо наявні контакти

    if (contacts.length === 0) {
        console.log('Немає контактів для видалення.'); // Якщо масив порожній
        return;
    }

    const removedContact = contacts.pop(); // Видаляємо останній контакт
    await writeContacts(contacts); // Записуємо оновлений масив назад у файл
    console.log('Видалено контакт:', removedContact); // Виводимо інформацію про видалений контакт
};

// Виклик функції
removeLastContact();
