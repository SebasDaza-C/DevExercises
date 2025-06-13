// Simulación de sistema de login y creación de cuentas en JavaScript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let usernames = { 'Sebastian': 1 };
let passwords = { 'Sebastian': '102982' };

function createAccount(callback) {
    console.log("Let's create your account");
    readline.question('Enter your username: ', (newUsername) => {
        readline.question('Enter your password: ', (newPassword) => {
            if (usernames[newUsername]) {
                console.log('Username already exists. Please choose a different username.');
                callback();
            } else {
                usernames[newUsername] = Object.keys(usernames).length + 1;
                passwords[newUsername] = newPassword;
                console.log(`Your account has been created.\nYour username is "${newUsername}" and your password is "${newPassword}"`);
                loginFlow();
            }
        });
    });
}

function loginFlow() {
    readline.question('Enter your username: ', (username) => {
        readline.question('Enter your password: ', (password) => {
            if (usernames[username] && passwords[username] === password) {
                if (username.toLowerCase() === 'sebastian') {
                    console.log('Welcome back administrator ' + username);
                    readline.question('Do you want to see the list of users? (yes/no): ', (adminList) => {
                        if (adminList.toLowerCase() === 'yes') {
                            console.log('List of users:');
                            Object.keys(usernames).forEach(user => console.log(user));
                        } else if (adminList.toLowerCase() === 'no') {
                            console.log('Okay, have a nice day!');
                        } else {
                            console.log('Invalid option');
                        }
                        readline.close();
                    });
                } else {
                    console.log('Welcome back ' + username);
                    readline.close();
                }
            } else {
                console.log('Incorrect username or password');
                readline.close();
            }
        });
    });
}

function login() {
    console.log('Welcome to Login');
    readline.question('Do you have an existing account? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'exit') {
            console.log('Exiting the program. Goodbye!');
            readline.close();
        } else if (answer.toLowerCase() === 'no') {
            createAccount(loginFlow);
        } else if (answer.toLowerCase() === 'yes') {
            loginFlow();
        } else {
            console.log('Invalid option');
            readline.close();
        }
    });
}

login();
