import accounts from "./scripts/accounts";
import { createUsernames, login } from "./scripts/login";

const init = function() {
  createUsernames(accounts);
  login(accounts);
};

init();
