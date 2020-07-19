import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameProgression = () => {
  const data = {
    howToPlay: 'What number is missing in the progression?',
    scale: null,
    step: null,
    getQuestion() {
      console.log(`Question: ${this.scale}`);
    },
    getCorrectAnswer() {
      let answer = null;
      for (let i = 0; i < data.scale.length - 1; i += 1) {
        if (data.scale[i] === '..') {
          answer = data.scale[i - 1] + data.step;
        }
      }
      return String(answer);
    },
    getNewData() {
      this.scale = [getRandomInt(11, 19)];
      this.step = getRandomInt(2, 7);
      for (let i = 1; i < 10; i += 1) {
        this.scale.push(this.scale[i - 1] + this.step);
      }
      this.scale[getRandomInt(1, 9)] = '..';
    },
  };
  engine(data);
};

export default gameProgression;
