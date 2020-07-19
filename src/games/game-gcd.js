import getRandomInt from '../utils.js';
import engine from '../index.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const gameGcd = () => {
  const data = {
    howToPlay: 'Find the greatest common divisor of given numbers.',
    lOperand: null,
    rOperand: null,
    getQuestion() {
      console.log(`Question: ${this.lOperand} ${this.rOperand}?`);
    },
    getCorrectAnswer() {
      return gcd(this.lOperand, this.rOperand);
    },
    getNewData() {
      this.lOperand = getRandomInt(1, 1000);
      this.rOperand = getRandomInt(1, 1000);
    },
  };
  engine(data);
};

export default gameGcd;
