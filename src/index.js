/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const run = (howToPlay, dataGen) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(howToPlay);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = dataGen();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
