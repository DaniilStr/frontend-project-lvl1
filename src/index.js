/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const run = (howToPlay, dataGen) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(howToPlay);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = dataGen();
    console.log(data[0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== data[1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${data[1]}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default run;
