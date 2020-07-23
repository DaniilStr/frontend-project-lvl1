import getRandomInt from '../utils.js';
// import engine from '../index.js';

const isEven = (x) => (x % 2 === 0);

const gameEven = () => {
  const data = {
    howToPlay: 'Answer "yes" if the number is even, otherwise answer "no".',
    num: null,
    getQuestion() {
      console.log(`${'Question '}${this.num}`);
    },
    getCorrectAnswer() {
      return isEven(this.num) ? 'yes' : 'no';
    },
    getNewData() {
      this.num = getRandomInt(1, 10);
    },
  };

  engine(data);
};

export default gameEven;
