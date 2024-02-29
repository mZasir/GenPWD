document.getElementById('generateButton').addEventListener('click', generatePassword);
let copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyPassword);
copyButton.addEventListener('click', showMessage);


function generatePassword() {
    console.log('generatePassword');
    let length = parseInt(document.getElementById('length').value);
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let symbols = "!@#$!@#$%&*@#$!@#$%&@#$!@#$%&@#$!@#$%&";

    let characters = "";
    if (document.getElementById('uppercase').checked) {
        characters += uppercase;
    }
    if (document.getElementById('lowercase').checked) {
        characters += lowercase;
    }
    if (document.getElementById('digits').checked) {
        characters += digits;
    }
    if (document.getElementById('symbols').checked) {
        characters += symbols;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').textContent = password;
}

function copyPassword() {
    let password = document.getElementById('password');
    navigator.clipboard.writeText(password.innerText);
}

function showMessage(){
    let message = document.getElementById('message');
    message.style.display = 'block';

    message.classList.add('fadeIn');

    setTimeout(() => {
        message.classList.remove('fadeIn');

        // Ajoutez la classe pour l'effet de fondu à la sortie
        message.classList.add('fadeOut');

        setTimeout(() => {
            message.style.display = 'none';
            // Retirez la classe après la sortie
            message.classList.remove('fadeOut');
        }, 1100);

    }, 500);
}