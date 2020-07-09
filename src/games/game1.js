import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';

let num = null;

const question = () => {
  num = getRandomInt(1, 10);
  console.log(`${'Question: '}${num}`);
};

const isEven = (x) => (x % 2 === 0);

function correctAnswer() {
  return isEven(num) ? 'yes' : 'no';
}

function userAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export {
  howToPlay, question, correctAnswer, userAnswer,
};
