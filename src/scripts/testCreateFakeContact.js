import { createFakeContact } from '../utils/createFakeContact.js';

const testCreateFakeContact = () => {
    const contact = createFakeContact(); // Генеруємо один контакт
    console.log('Згенерований контакт:', contact); // Виводимо його у консоль
};

// Виклик функції
testCreateFakeContact();
