import readlineSync from 'readline-sync';

const sayHelloByName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};

export { sayHelloByName };