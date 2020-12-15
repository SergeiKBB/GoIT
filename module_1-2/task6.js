const login = prompt('Login');

switch (login) {
    case 'Админ':
        const password = prompt('Password');
        password === 'Я главный'
            ? console.log('Здравствуйте!')
            : console.log('Неверный пароль');
        break;
    case null:
        console.log('Отменено');
        break;
    case '':
        console.log('Отменено');
        break;
    default:
        console.log('Я вас не знаю');
}

