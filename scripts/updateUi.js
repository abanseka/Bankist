import { displayTransactions } from "./transactions";
import { displayBalance } from "./balance";
import { displaySummary } from "./summary";

export const updateUI = function (account) {
  displayBalance(account);
  displayTransactions(account.transactions);
  displaySummary(account);
};
