import {
  appContainer,
  closeAccountBtn,
  greetings,
  loanBtn,
  loginBtn,
  sortBtn,
  tranferBtn,
  userName,
  userPassword
} from './elements'
import { closeAccount, loanMoney, transferMoney } from './operations'
import { displayTransactions } from './transactions'
import { startLogoutTimer, updateUI } from './updateUi'

let currentAccount
export const createUsernames = function (acc) {
  Object.values(acc).forEach(function (acc) {
    return (acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((nname) => nname[0])
      .join(''))
  })
}

export const login = function (acc) {
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault()
    currentAccount = Object.values(acc).find(function (acc) {
      return acc.username === userName.value
    })

    if (currentAccount?.pin === Number(userPassword.value)) {
      greetings.textContent = `Welcome Back, ${
        currentAccount.owner.split(' ')[0]
      }`
      appContainer.style.opacity = 100
      userName.value = userPassword.value = ''
    }

    updateUI(currentAccount)
    startLogoutTimer()

    let sorted = false
    sortBtn.addEventListener('click', function (e) {
      e.preventDefault
      displayTransactions(currentAccount, currentAccount.transactions, !sorted)
      sorted = !sorted
    })
    //
    tranferBtn.addEventListener('click', function (e) {
      e.preventDefault()
      transferMoney(acc, currentAccount)
      updateUI(currentAccount)
    })

    loanBtn.addEventListener('click', function (e) {
      e.preventDefault()
      loanMoney(currentAccount)
      updateUI(currentAccount)
    })

    closeAccountBtn.addEventListener('click', function (e) {
      e.preventDefault()
      closeAccount(acc, currentAccount)
    })
  })
}
