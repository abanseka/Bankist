import { transactionDisplay } from "./elements";
import { formatCur, transactionDates } from "./updateUi";

export const displayTransactions = function(
  currentAccount,
  transaction,
  sort = false
) {
  const currAccount = currentAccount;
  // console.log(currAccount);
  transactionDisplay.innerHTML = "";

  const transacXn = sort
    ? transaction.slice().sort((a, b) => a - b)
    : transaction;

  transacXn.forEach(function(amount, i) {
    const type = amount > 0 ? "deposit" : "withdrawal";
    const date = new Date(currAccount.transactionDates[i]);
    // console.log(date)
    const displayDate = transactionDates(
      date,
      currAccount.locale
    );
    const formattedAmount = formatCur(
      amount,
      currAccount.locale,
      currAccount.currency
    )
    const markup = `
            <div class="transaction__row">
              <div class="transaction__type ${type}">${i + 1} ${type}</div>
              <div class="transaction__date">${displayDate}</div>
              <div class="transaction__amount">${formattedAmount}</div>
            </div>
    `;
    transactionDisplay.insertAdjacentHTML("afterbegin", markup);
  });
};
