import { displayTransactions } from "./transactions";
import { displayBalance } from "./balance";
import { displaySummary } from "./summary";
import { timer as timr, greetings, appContainer } from "./elements.js";

export const updateUI = function(account) {
  displayBalance(account);
  displayTransactions(account, account.transactions);
  displaySummary(account);
};

// Dates and Times

export const startLogoutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    timr.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timing);
      greetings.textContent = "Log in to get started";
      appContainer.style.opacity = 0;
    }

    time--;
  };
  let time = 30;
  tick();
  const timing = setInterval(tick, 1000);
  return timr;
};

export const transactionDates = (date, locale) => {
  const caldaysPassed = function(date1, date2) {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  const daysPassed = caldaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(new Date(date));
};


export const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};


