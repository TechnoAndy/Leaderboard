import apiUrl from './APIconfig.js';

const playerName = document.querySelector('#player-name');
const playerScore = document.querySelector('#player-score');
const form = document.querySelector('form');
const messagePopup = document.querySelector('#add-msg');

const addScore = async () => {
  const user = playerName.value;
  const score = playerScore.value;
  const scoreOBJ = { user, score };
  if (!user || !score) {
    messagePopup.innerHTML = 'Please add a player name and score';
    messagePopup.style.color = 'red';
    return;
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(scoreOBJ),
    });

    const data = await res.json();
    if (!res.ok) {
      messagePopup.innerHTML = 'Your score could not be added, please try again';
      messagePopup.style.color = 'red';
    }
    messagePopup.innerHTML = data.result;
    form.reset();
  } catch (err) {
    messagePopup.innerHTML = 'Your score could not be added, please try again';
  }

  setTimeout(() => {
    messagePopup.innerHTML = '';
  }, 2000);
};
export default addScore;
