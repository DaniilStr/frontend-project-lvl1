import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let num = null;

const question = () => {
  num = getRandomInt(1, 10);
  console.log(`${'Question: '}${num}`);
};

const isPrime = (x) => {
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

function correctAnswer() {
  return isPrime(num) ? 'yes' : 'no';
}

function userAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export {
  howToPlay, question, correctAnswer, userAnswer,
};
