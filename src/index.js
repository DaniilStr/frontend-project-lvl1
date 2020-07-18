/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const engine = (howToPlay, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${"'"}${userAnswer}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${correctAnswer}${"'.\n Let's try again, "}${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default engine;
