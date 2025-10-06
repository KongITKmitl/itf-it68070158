let accountBalance = 1000
let cashBalance = 1000
let logCount = 1

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('account-balance').value = accountBalance
    document.getElementById('cash-balance').value = cashBalance
    document.getElementById('history-log').value = ""
})

function setBalance() {
    let newAccount = Number(document.getElementById('account-balance').value)
    let newCash = Number(document.getElementById('cash-balance').value)
    accountBalance = newAccount
    cashBalance = newCash
    addLog(`Balance updated → Account: ${accountBalance}, Cash: ${cashBalance}`)
}

function bankOperation() {
    let type = document.getElementById('operation').value
    let amount = Number(document.getElementById('amount').value)
    if (amount <= 0) return

    if (type === 'deposit') {
        if (amount > cashBalance) {
            addLog(`Deposit failed — not enough cash.`)
            return
        }
        accountBalance += amount
        cashBalance -= amount
        addLog(`Deposit ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}`)
    } 
    else if (type === 'withdraw') {
        if (amount > accountBalance) {
            addLog(`Withdraw failed — not enough balance.`)
            return
        }
        accountBalance -= amount
        cashBalance += amount
        addLog(`Withdraw ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}`)
    }

    document.getElementById('account-balance').value = accountBalance
    document.getElementById('cash-balance').value = cashBalance
}

function addLog(text) {
    let logBox = document.getElementById('history-log')
    logBox.value += `${logCount}. ${text}\n`
    logBox.scrollTop = logBox.scrollHeight
    logCount++
}

function convertCurrency() {
    let inputAmount = Number(document.getElementById('input-currency').value)
    let type = document.getElementById('currency-type').value
    let output = 0
    if (type === 'USD') output = inputAmount * 36.5
    else if (type === 'THB') output = inputAmount / 36.5
    document.getElementById('output-currency').value = output.toFixed(2)
}
