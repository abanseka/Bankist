import {
  appContainer,
  closeAccountUname,
  closeAccountUpassword,
  loanAmount,
  transferAmount,
  transferRecipient,
} from "./elements";

export let AccIndex;

export const transferMoney = function(account, currentAccount) {
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

    currentAcc.transactionDates.push(new Date().toISOString());
    recipientAccount.transactionDates.push(new Date().toISOString());
    [transferAmount.value, transferRecipient.value] = ["", ""];
  }
};

export const loanMoney = function(account) {
  const amount = Number(loanAmount.value);
  if (
    amount > 0 &&
    account.transactions.some((transaction) => transaction >= amount * 0.1)
  ) {
    account.transactions.push(amount);
  }

  loanAmount.value = "";
};

export const closeAccount = function(accounts, currentAccount) {
  const currentAcc = currentAccount;
  const username = currentAcc.username;
  const password = currentAcc.pin;

  console.log(currentAcc, username, password);

  if (
    closeAccountUname.value === username &&
    Number(closeAccountUpassword.value) === password
  ) {
    AccIndex = Object.values(accounts).findIndex(
      (account) => account.username === username
    );

    appContainer.style.opacity = 0;
  }
  [closeAccountUname.value, closeAccountUpassword.value] = ["", ""];
};
