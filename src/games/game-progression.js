import getRandomInt from '../utils.js';
import engine from '../index.js';

const howToPlay = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (firstElement, difference, length) => {
  const progression = [firstElement];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  return progression;
};

const dataGen = () => {
  const firstElement = getRandomInt(0, 20);
  const progressionDifference = getRandomInt(2, 9);
  const hiddenItemIndex = getRandomInt(0, progressionLength - 1);
  const progression = makeProgression(firstElement, progressionDifference, progressionLength);
  const answer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '..';
  const question = progression.join();
  return [question, answer];
};

const runGameProgression = () => engine(howToPlay, dataGen);

export default runGameProgression;
