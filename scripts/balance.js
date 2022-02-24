import { totalBalance } from "./elements";

export const displayBalance = function (account) {
  account.balance = account.transactions.reduce(
    (sum, current) => sum + current,
    0
  );
  totalBalance.textContent = `${account.balance}€`;
};
