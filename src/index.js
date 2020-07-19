/* eslint-disable max-len */
import readlineSync from 'readline-sync';

const engine = (data) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(data.howToPlay);

  for (let i = 0; i < 3; i += 1) {
    data.getNewData();
    data.getQuestion();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== data.getCorrectAnswer()) {
      console.log(`${"'"}${userAnswer}${"'"}${'is wrong answer ;(. Correct answer was '}${"'"}${data.getCorrectAnswer()}${"'.\n Let's try again, "}${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations, '}${name}${'!'}`);
};

export default engine;
