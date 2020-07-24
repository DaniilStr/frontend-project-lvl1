import getRandomInt from '../utils.js';
import run from '../index.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
const howToPlay = 'Find the greatest common divisor of given numbers.';

const dataGen = () => {
  const lOperand = getRandomInt(1, 1000);
  const rOperand = getRandomInt(1, 1000);
  const question = `Question: ${lOperand} ${rOperand}?`;
  const answer = String(gcd(lOperand, rOperand));

  return [question, answer];
};

const runGameGcd = () => run(howToPlay, dataGen);

export default runGameGcd;
