import getRandomInt from '../utils.js';
import engine from '../index.js';

const howToPlay = 'What number is missing in the progression?';

const getProgression = (firstElement, progressionDifference, progressionLength) => {
  const progression = [firstElement];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionDifference);
  }
  return progression;
};

const getAnswer = (progression) => {
  const answer = progression[getRandomInt(0, 9)];
  return String(answer);
};

const getQuestion = (progression, answer) => {
  const question = progression;
  question[question.indexOf(+answer)] = '..';
  return question.join(', ');
};

const dataGen = () => {
  const firstElement = getRandomInt(0, 20);
  const progressionDifference = getRandomInt(2, 9);
  const progressionLength = 10;
  const progression = getProgression(firstElement, progressionDifference, progressionLength);
  const answer = getAnswer(progression);
  const question = getQuestion(progression, answer);
  return [question, answer];
};

const runGameProgression = () => engine(howToPlay, dataGen);

export default runGameProgression;
