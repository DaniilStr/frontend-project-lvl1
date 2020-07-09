#!/usr/bin/env node
import engine from '../src/index.js';
import {
  howToPlay, question, correctAnswer, userAnswer,
} from '../src/games/game1.js';

engine(howToPlay, question, userAnswer, correctAnswer);
