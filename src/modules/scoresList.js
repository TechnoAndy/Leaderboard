import API_Url from "./APIconfig.js";

const scoreList = document.querySelector('.list-scores');
const messagePopup = document.querySelector('#add-msg');
const ListScores = async () => {
  let alerts = '';

  try {
    const res = await fetch(API_Url);
    const data = await res.json();
    if (!res.ok) {
      scoreList.innerHTML = 'Update';
    }
    data.result
      .sort((a, b) => b.score - a.score)
      .forEach((item) => {
        alerts += `<tr><td>${item.user}: <span>${item.score}</span></td></tr>`;
      });
    scoreList.innerHTML = alerts;
    messagePopup.innerHTML = 'Your scores have been updated successfully';
    setTimeout(() => {
      messagePopup.innerHTML = '';
    }, 2000);
  } catch (err) {
    scoreList.innerHTML = 'Down Time';
  }
};
export default ListScores;
