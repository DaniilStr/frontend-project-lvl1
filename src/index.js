/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const engine = (htp, question, fn1, fn2) => {
  console.log('Welcome to the Brain Games!');
  const name = userName();
  console.log(htp);

  for (let i = 0; i < 3; i += 1) {
    question();
    const userAnswer = fn1();
    const correctAnswer = fn2();
    if (userAnswer !== correctAnswer) {
      console.log(`${"'"}${userAnswer}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${correctAnswer}${"'.\n Let's try again, "}${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default engine;
