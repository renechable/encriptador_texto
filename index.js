// Función para encriptar el texto
function encrypt(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        // Desplazamiento de caracteres
        encrypted += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return encrypted;
}

// Función para desencriptar el texto
function decrypt(text) {
    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
        // Desplazamiento inverso de caracteres
        decrypted += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return decrypted;
}

// Función para manejar el evento de encriptar
document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const encryptedText = encrypt(inputText);
        document.getElementById('outputText').value = encryptedText;
    } else {
        alert('Por favor, ingresa un texto para encriptar.');
    }
});

// Función para manejar el evento de desencriptar
document.getElementById('decryptBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    if (outputText) {
        const decryptedText = decrypt(outputText);
        document.getElementById('inputText').value = decryptedText;
    } else {
        alert('Por favor, ingresa un texto para desencriptar.');
    }
});

// Función para limpiar los campos
function clearFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

// Evento para limpiar los campos al recargar
window.addEventListener('load', clearFields);
