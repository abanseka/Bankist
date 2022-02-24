import { interest, summaryAmountIn, summaryAmountOut } from "./elements";

export const displaySummary = function (account) {
  const interestRate = account.interestRate;
  const income = account.transactions
    .filter((transaction) => transaction > 0)
    .reduce((sum, current) => sum + current, 0);

  const dispense = account.transactions
    .filter((transaction) => transaction < 0)
    .reduce((sum, current) => sum + current, 0);

  const interestt = account.transactions
    .filter((transaction) => transaction > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .reduce((sum, current) => sum + current, 0);

  summaryAmountIn.textContent = `${income}€`;
  summaryAmountOut.textContent = `${dispense}€`;
  interest.textContent = `${interestt}€`;
};
