import { transferAmount, transferRecipient } from "./elements";

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
