const validate = new window.JustValidate('#form');
// validate
let validation = new JustValidate('#form');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('confirmPassword');

validation.addField('#name', [
    {
        rule:'required',
        errorMessage: 'Напишите пожалуйста ваше имя'
    },
    {
        rule: 'minLength',
        errorMessage: 'Минимальная длина имени 2 символа',
        value: 2,
    },
]);
validation.addField('#email', [
    {
        rule:'required',
        errorMessage: 'Напишите пожалуйста ваш email'
    },
    {
        rule: 'minLength',
        errorMessage: 'Минимальная длина почты 4 символа',
        value: 4,
    },
]);
validation.addField('#password', [
    {
        rule:'required',
        errorMessage: 'Напишите пожалуйста ваш пароль'
    },
    {
        rule: 'minLength',
        errorMessage: 'Минимальная длина имени 8 символов',
        value: 8,
    },
]);
validation.addField('#confirmPassword', [
    {
        rule:'required',
        errorMessage: 'Напишите пожалуйста ваш повторный пароль'
    },
    {
        rule: 'minLength',
        errorMessage: 'Минимальная длина имени 8 символов',
        value: 8,
    },
]);


const showPass = document.getElementById('showPass');
showPass.addEventListener('click', () => {


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordConfirmInput.type = 'text';
    } else {
        passwordInput.type = 'password';
        passwordConfirmInput.type = 'password';
    }
})
