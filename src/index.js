import readlineSync from 'readline-sync';

const nameHello = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
};

export default nameHello;
