import { totalBalance } from './elements'
import { formatCur } from './updateUi'

export const displayBalance = function (account) {
  account.balance = account.transactions.reduce(
    (sum, current) => sum + current,
    0
  )
  totalBalance.textContent = `${formatCur(
    account.balance,
    account.locale,
    account.currency
  )}`
}
