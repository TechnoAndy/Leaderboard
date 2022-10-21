import './style.css';
import addScores from './modules/addScores.js';
import scoresList from './modules/scoresList.js';

const refreshBtn = document.querySelector('#update');
const submitBtn = document.querySelector('#new-score');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScores();
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scoresList();
});
