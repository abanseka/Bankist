import {
  appContainer,
  greetings,
  loginBtn,
  userName,
  userPassword,
} from "./elements";
import { displaySummary } from "./summary";
import { displayTransactions } from "./transactions";

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
    // console.log(currentAccount);
    displayTransactions(currentAccount.transactions);
    displaySummary(currentAccount);
  });
};
