import getRandomInt from '../utils.js';
import run from '../index.js';

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= Math.floor(x / 2); divisor += 1) {
    if (x % divisor === 0) {
      return false;
    }
  }
  return true;
};

const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const num = getRandomInt(0, 20);
  const question = String(num);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const runGamePrime = () => run(howToPlay, generateData);

export default runGamePrime;
