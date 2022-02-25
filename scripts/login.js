import { displayBalance } from "./balance";
import {
  appContainer,
  greetings,
  loanBtn,
  loginBtn,
  tranferBtn,
  userName,
  userPassword,
} from "./elements";
import { loanMoney, transferMoney } from "./operations";
import { updateUI } from "./updateUi";

let currentAccount;
export const createUsernames = function (acc) {
  Object.values(acc).forEach(function (acc) {
    return (acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((nname) => nname[0])
      .join(""));
  });
};

export const login = function (acc) {
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    currentAccount = Object.values(acc).find(function (acc) {
      return acc.username === userName.value;
    });

    if (currentAccount?.pin === Number(userPassword.value)) {
      greetings.textContent = `Welcome Back, ${
        currentAccount.owner.split(" ")[0]
      }`;
      appContainer.style.opacity = 100;
      userName.value = userPassword.value = "";
    }

    updateUI(currentAccount);

    //
    tranferBtn.addEventListener("click", function (e) {
      e.preventDefault();
      transferMoney(acc, currentAccount);
      updateUI(currentAccount);
    });

    loanBtn.addEventListener("click", function (e) {
      e.preventDefault();
      loanMoney(currentAccount);
      updateUI(currentAccount);
    });
  });
};
