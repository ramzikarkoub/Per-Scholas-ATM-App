const message = document.querySelector("#message");
const balanceCheck = document.querySelector(".balanceCheck");
const extra = document.querySelector(".extra");

let balance = 10000;
const depositAmounts = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500];

// Toggles balance visibility
const checkBalance = () => {
  if (message.textContent === "Balance is hidden") {
    updateDisplay(balance);
    balanceCheck.classList.add("balanceChecked");
    balanceCheck.textContent = "Hide Balance";
  } else {
    message.textContent = `Balance is hidden`;
    balanceCheck.classList.remove("balanceChecked");
    balanceCheck.textContent = "Check Balance";
  }
};

// Logs the user out after a delay
const logout = () => {
  setTimeout(() => {
    message.textContent = `You are logged out`;
  }, 2000);
};

// Displays deposit or withdrawal options
const showTransactionOptions = (type) => {
  const isDeposit = type === "deposit";

  const buttonsHTML = depositAmounts
    .map((amount) => {
      const displayAmount = isDeposit ? `$${amount}` : `- $${amount}`;
      const depositAmount = isDeposit ? amount : -amount;
      return `<button onclick="deposit(${depositAmount})">${displayAmount}</button>`;
    })
    .join("");

  const customInputHTML = `
    <p>Custom amount</p>
    <input 
      type="text" 
      id="customAmount" 
      placeholder="${isDeposit ? "Enter amount" : "- Enter amount"}" 
    />
    <br/>
    <button type="submit" onclick="submitCustomAmount(${isDeposit})">Submit</button>
  `;

  extra.innerHTML = buttonsHTML + customInputHTML;
};

// Submits a custom amount for deposit or withdrawal
const submitCustomAmount = (isDeposit) => {
  const customAmountInput = document.querySelector("#customAmount");
  let customAmount = parseFloat(customAmountInput.value);

  if (isNaN(customAmount)) {
    alert("Please enter a valid number.");
    return;
  }

  if (!isDeposit) {
    customAmount = -Math.abs(customAmount); // Ensure withdrawal is negative
  }

  deposit(customAmount);
};

// Handles deposit and updates the balance
const deposit = (amount) => {
  console.log(amount);
  balance += amount;
  updateDisplay(balance);
};

// Updates the balance message
const updateDisplay = (newBalance) => {
  message.textContent = `Your current balance is $${newBalance}.`;
};

// Clears the extra div
const clearDiv = () => {
  extra.innerHTML = "";
};
