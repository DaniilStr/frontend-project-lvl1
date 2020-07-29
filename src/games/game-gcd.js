import getRandomInt from '../utils.js';
import run from '../index.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const howToPlay = 'Find the greatest common divisor of given numbers.';

const dataGen = () => {
  const lOperand = getRandomInt(1, 1000);
  const rOperand = getRandomInt(1, 1000);
  const question = `${lOperand} ${rOperand}`;
  const answer = String(findGcd(lOperand, rOperand));

  return [question, answer];
};

const runGameGcd = () => run(howToPlay, dataGen);

export default runGameGcd;
