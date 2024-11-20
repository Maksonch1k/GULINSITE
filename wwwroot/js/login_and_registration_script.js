document.addEventListener('DOMContentLoaded', function () {
    

    function hiddenOpen_Closeclick() {
        let x = document.querySelector(".container-login-registration");
        if (x.style.display == "none") {
            x.style.display = "grid";
        } else {
            x.style.display = "none";
        }
    }

    document.getElementById("click-to-hide").addEventListener("click", hiddenOpen_Closeclick);
    document.querySelector(".overlay").addEventListener("click", hiddenOpen_Closeclick);

    id = "click-to-hide"
    const signInBtn = document.querySelector('.signin-btn');
    const signUpBtn = document.querySelector('.signup-btn');
    const formBox = document.querySelector('.form-box');
    const block = document.querySelector('.block');

    if (signInBtn && signUpBtn) {
        signUpBtn.addEventListener('click', function () {
            formBox.classList.add('active');
            block.classList.add('active');
        });

        signInBtn.addEventListener('click', function () {
            formBox.classList.remove('active');
            block.classList.remove('active');
        });
    }
});

const form_btn_signin = document.querySelector('.form_btn_signin');
const form_btn_signup = document.querySelector('.form_btn_signup');
if (form_btn_signin) {
    // Ссылки: 3
    form_btn_signin.addEventListener('click', function () {
        const requestURL = '/Home/Login';
        const form = {
            email: document.querySelector("#signin_email input"),
            password: document.querySelector("#signin_password input")
        };
        const body = {
            email: form.email.value,
            password: form.password.value
        };
        sendRequest('POST', requestURL, body)
            .then(data => {
                console.log('Успешный ответ:', data);
            })
            .catch(err => {
                displayErrors(err, errorContainer);

                console.log(err);
            });
    });
}


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw errorData; // Бросаем ошибки для обработки в .catch()
            });
        }
        return response.json();
    });
}

// Функция для отображения ошибок
function displayErrors(errors, errorContainer) {
    errorContainer.innerHTML = ''; // Очистить предыдущие ошибки
    errors.forEach(error => {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error');
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);

    });
    document.getElementById("side-menu-button-click-to-hide").addEventListener("click", hiddenOpen_Closeclick);
}








