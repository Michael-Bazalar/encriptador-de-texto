// Seleccionar elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.querySelector('.btn-encriptar');
const decryptBtn = document.querySelector('.btn-desencriptar');
const copyBtn = document.querySelector('.btn-copiar');

// Objeto con las reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar el texto
function encrypt(text) {
    return text.replace(/[eiaou]/g, letter => encryptionRules[letter]);
}

// Función para desencriptar el texto
function decrypt(text) {
    let decryptedText = text;
    Object.entries(encryptionRules).forEach(([key, value]) => {
        decryptedText = decryptedText.replaceAll(value, key);
    });
    return decryptedText;
}

// Función para validar el texto de entrada
function validateInput(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

// Función para mostrar el resultado
function showResult(text) {
    if (text.trim() === '') {
        outputText.value = 'Ningún mensaje fue encontrado';
        outputText.style.backgroundImage = 'url("Imagenes/muneco.png")';
    } else {
        outputText.value = text;
        outputText.style.backgroundImage = 'none';
    }
}

// Event listener para el botón de encriptar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (validateInput(text)) {
        const encryptedText = encrypt(text);
        showResult(encryptedText);
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Event listener para el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (validateInput(text)) {
        const decryptedText = decrypt(text);
        showResult(decryptedText);
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    }
});

// Event listener para el botón de copiar
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    // La notificación de copiado ha sido eliminada
});