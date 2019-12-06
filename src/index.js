import readlineSync from 'readline-sync';

const nameHello = () => {
  const name = readlineSync.question('What is your name?');
  console.log(`Hello, ${name}`);
};

export default nameHello;
