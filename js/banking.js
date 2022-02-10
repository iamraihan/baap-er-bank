// handler deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountText = depositInput.value
    const newDepositAmount = parseFloat(newDepositAmountText)

    // update deposit total
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal

    // update account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotal.innerText = newBalanceTotal


    // clear the deposit input field
    depositInput.value = ''
})

// event handler in withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmoutText = withdrawInput.value
    const newWithdaraAmount = parseFloat(withdrawAmoutText)
    console.log(newWithdaraAmount)

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previouseWithdrawTotal = parseFloat(previousWithdrawText)

    const newWithdrawTotal = previouseWithdrawTotal + newWithdaraAmount

    withdrawTotal.innerText = newWithdrawTotal

    //update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdaraAmount

    balanceTotal.innerText = newBalanceTotal

    // clear withdraw input
    withdrawInput.value = ''
})