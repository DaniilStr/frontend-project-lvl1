import getRandomInt from '../utils.js';
import engine from '../index.js';

const howToPlay = 'What number is missing in the progression?';

const getScale = (step) => {
  const scale = [getRandomInt(11, 19)];
  for (let i = 1; i < 10; i += 1) {
    scale.push(scale[i - 1] + step);
  }
  scale[getRandomInt(1, 9)] = '..';
  return scale;
};

const getAnswer = (step, scale) => {
  let answer = null;
  for (let i = 0; i < scale.length - 1; i += 1) {
    if (scale[i] === '..') {
      answer = String(scale[i - 1] + step);
    }
  }
  return answer;
};

const dataGen = () => {
  const step = getRandomInt(2, 7);
  const scale = getScale(step);
  const question = `Question: ${scale}`;
  const answer = getAnswer(step, scale);

  return [question, answer];
};

const runGameProgression = () => engine(howToPlay, dataGen);

export default runGameProgression;
