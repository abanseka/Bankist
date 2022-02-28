import { displayTransactions } from "./transactions";
import { displayBalance } from "./balance";
import { displaySummary } from "./summary";
import { timer as timr, greetings, appContainer } from "./elements.js"

export const updateUI = function(account) {
  displayBalance(account);
  displayTransactions(account.transactions);
  displaySummary(account);
};

// Dates and Times 

export const startLogoutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0)
    const sec = String(time % 60).padStart(2, 0)


    timr.textContent = `${min}:${sec}`

    if (time === 0) {
      clearInterval(timing);
      greetings.textContent = "Log in to get started"
      appContainer.style.opacity = 0;
    }

    time--
  }
  let time = 30;
  tick()
  const timing = setInterval(tick, 1000);
  return timr;
}
