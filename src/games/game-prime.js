import getRandomInt from '../utils.js';
import engine from '../index.js';

const isPrime = (x) => {
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const data = {
    howToPlay: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    num: null,
    getQuestion() {
      console.log(`${'Question: '}${this.num}`);
    },
    getCorrectAnswer() {
      return isPrime(this.num) ? 'yes' : 'no';
    },
    getNewData() {
      this.num = getRandomInt(1, 10);
    },
  };
  engine(data);
};

export default gamePrime;
