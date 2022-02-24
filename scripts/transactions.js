import { transactionDisplay } from "./elements";

export const displayTransactions = function (transaction, sort = false) {
  transactionDisplay.innerHTML = "";

  const transacXn = sort
    ? transaction.slice().sort((a, b) => a - b)
    : transaction;

  transacXn.forEach(function (amount, i) {
    const type = amount > 0 ? "deposit" : "withdrawal";
    const markup = `
            <div class="transaction__row">
              <div class="transaction__type ${type}">${i + 1} ${type}</div>
              <div class="transaction__amount">${amount}€</div>
            </div>
    `;
    transactionDisplay.insertAdjacentHTML("afterbegin", markup);
  });
};
