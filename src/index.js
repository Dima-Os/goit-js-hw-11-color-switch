import './styles.css';
import { colors } from './js/colors';

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let startIntervalChanging = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = color => {
  refs.body.setAttribute('style', `background-color:${color}`);
};

const onStartHendler = () => {
  startIntervalChanging = setInterval(() => {
    changeColor(colors[randomIntegerFromInterval(0, colors.length - 1)]);
  }, 1000);
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
};

const onStopHendler = () => {
  clearInterval(startIntervalChanging);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');
};

refs.start.addEventListener('click', onStartHendler);
refs.stop.addEventListener('click', onStopHendler);
refs.stop.setAttribute('disabled', 'disabled');
