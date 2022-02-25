import { loanAmount, transferAmount, transferRecipient } from "./elements";

export const transferMoney = function (account, currentAccount) {
  const currentAcc = currentAccount;
  let recipientUsername = transferRecipient.value;
  let transferAmt = Number(transferAmount.value);

  const [recipientAccount] = Object.values(account).filter(
    (acc) => acc.username === recipientUsername
  );

  if (
    transferAmt > 0 &&
    currentAcc.balance >= transferAmt &&
    recipientAccount?.username !== currentAcc.username
  ) {
    recipientAccount.transactions.push(transferAmt);
    currentAcc.transactions.push(-transferAmt);
    [transferAmount.value, transferRecipient.value] = ["", ""];
  }
};

export const loanMoney = function (account) {
  const amount = Number(loanAmount.value);
  if (
    amount > 0 &&
    account.transactions.some((transaction) => transaction >= amount * 0.1)
  ) {
    account.transactions.push(amount);
  }

  loanAmount.value = "";
};
