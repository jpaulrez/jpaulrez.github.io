import { saveTask } from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {
    
});

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name-input');
    const lastnameInput = document.getElementById('lastname-input');
    const emailInput = document.getElementById('email-input');
    const whatsappInput = document.getElementById('whatsapp-input');
    const limitationInput = document.getElementById('limitation-input');
    const categoryInput = document.getElementById('category-input');

    const name = nameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const whatsapp = whatsappInput.value.trim();
    const limitation = limitationInput.value.trim();
    const category = categoryInput.value.trim();

    // Validaciones
    if (name === '') {
        alert('Por favor, ingrese su nombre');
        return;
    }
    if (email === '') {
        alert('Por favor, ingrese su correo electrónico');
        return;
    }
    if (whatsapp === '') {
        alert('Por favor, ingrese su número');
        return;
    }
    if (category === '') {
        alert('Por favor, ingrese su correo rubro');
        return;
    }

    if (name && lastname && email && whatsapp && limitation && category) {
        const submitNote = document.getElementById('submit-note');
        submitNote.textContent = 'Enviando correctamente';
        saveTask(name, lastname, email, whatsapp, limitation, category);
    }
});
