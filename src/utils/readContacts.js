import fs from 'fs/promises'; // Для роботи з файлами
import { PATH_DB } from '../constants/contacts.js'; // Імпорт шляху до бази даних

export async function readContacts() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8'); // Читаємо файл
        return JSON.parse(data); // Перетворюємо JSON-рядок у масив
    } catch (error) {
        console.error('Error reading contacts:', error); // Виводимо помилку
        return []; // Повертаємо порожній масив
    }
}
