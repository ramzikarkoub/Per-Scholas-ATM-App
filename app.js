const message = document.querySelector("#message");
const balanceCheck = document.querySelector(".balanceCheck");
const extra = document.querySelector(".extra");
console.log(extra);

let balance = 10000;
const checkBalance = () => {
  if (message.textContent === "Balance is hidden") {
    updateDisplay(balance);
    balanceCheck.classList.add("balanceChecked");
    balanceCheck.textContent = "Hide Balance";
  } else if (message.textContent !== "Balance is hidden") {
    message.textContent = `Balance is hidden`;
    balanceCheck.classList.remove("balanceChecked");
    balanceCheck.textContent = "Check Balance";
  }
};

const logout = () => {
  setTimeout(() => {
    message.textContent = `Your are logget out`;
  }, 2000);
};
depositAmounts = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500];
const showDeposit = (type) => {
  if (type == "deposit") {
    const newDiv =
      depositAmounts
        .map(
          (amount) => `<button onclick="deposit(${amount})">$${amount}</button>
      `
        )
        .join("") +
      `<p>cutom amount</p><input type="text" name="" id="customAmount" placeholder="Enter amount"/></br>
      <button type="submit" onClick="submitCustomAmountDeposite()">submit</button>`;

    // Combine buttons into a single string
    extra.innerHTML = newDiv; // Add buttons to the 'extra' div
  } else if (type == "withdrawal") {
    const newDiv =
      depositAmounts
        .map(
          (
            amount
          ) => `<button onclick="deposit(${-amount})">- $${amount}</button>
      `
        )
        .join("") +
      `<p>cutom amount</p><input type="text" name="" id="customAmount" placeholder="- Enter amount"  /></br>
      <button type="submit" onClick="submitCustomAmountWithdrawal()">submit</button>`;

    // Combine buttons into a single string
    extra.innerHTML = newDiv; // Add buttons to the 'extra' div
  }
  // const newDiv =
  //   depositAmounts
  //     .map(
  //       (amount) => `<button onclick="deposit(${amount})">$${amount}</button>
  //     `
  //     )
  //     .join("") +
  //   `<p>cutom amount</p><input type="text" name="" id="customAmount" placeholder="Enter amount" /></br>
  //     <button type="submit" onClick="submitCustomAmount()">submit</button>`;

  // // Combine buttons into a single string
  // extra.innerHTML = newDiv; // Add buttons to the 'extra' div
};

const showWithdraw = () => {
  // clearDiv();
  showDeposit();
};

const submitCustomAmountDeposite = () => {
  const customAmountInput = document.querySelector("#customAmount");
  const customAmount = parseFloat(customAmountInput.value);

  if (isNaN(customAmount)) {
    alert("Please enter a valid positive number.");
    return;
  }
  // console.log(customAmount);
  deposit(customAmount);
};
const submitCustomAmountWithdrawal = () => {
  const customAmountInput = document.querySelector("#customAmount");
  const customAmount = parseFloat(-customAmountInput.value);

  if (isNaN(customAmount)) {
    alert("Please enter a valid positive number.");
    return;
  }
  // console.log(customAmount);
  deposit(customAmount);
};
const deposit = (amount) => {
  console.log(amount);

  balance += amount;

  updateDisplay(balance);
  console.log(balance);
};
const updateDisplay = (newBalance) => {
  message.textContent = `Your current balance is $${newBalance}.`;
};
const clearDiv = () => {
  extra.innerHTML = "";
};

// deposit(10);
// // Default balance for the user
// let balance = 10000;

// // Function to update the on-screen message
// function updateMessage(message) {
//   document.getElementById("message").innerText = message;
// }

// // Function to clear extra content
// function clearExtra() {
//   document.getElementById("extra").innerHTML = "";
// }

// // Function to check balance
// function checkBalance() {
//   // clearExtra();
//   updateMessage(`Your current balance is $${balance.toFixed(2)}.`);
// }

// Function to show deposit input
// function showDeposit() {
//   // clearExtra();
//   updateMessage("Enter the amount to deposit:");
//   const extraDiv = document.getElementById("extra");
//   extraDiv.innerHTML = `
//     <input type="number" id="depositAmount" placeholder="Deposit Amount">
//     <button onclick="deposit()">Deposit</button>
//   `;
// }

// // Function to handle deposit
// function deposit() {
//   const depositAmount = parseFloat(
//     document.getElementById("depositAmount").value
//   );
//   if (!isNaN(depositAmount) && depositAmount > 0) {
//     balance += depositAmount;
//     updateMessage(
//       `You deposited $${depositAmount.toFixed(
//         2
//       )}. New balance: $${balance.toFixed(2)}.`
//     );
//     // clearExtra();
//   } else {
//     updateMessage("Invalid deposit amount. Please try again.");
//   }
// }

// // Function to show withdraw options
// function showWithdraw() {
//   // clearExtra();
//   updateMessage("Choose an amount to withdraw:");
//   const extraDiv = document.getElementById("extra");
//   const presetAmounts = [10, 20, 30, 40, 50, 100, 200, 500];
//   extraDiv.innerHTML =
//     presetAmounts
//       .map(
//         (amount) => `<button onclick="withdraw(${amount})">$${amount}</button>`
//       )
//       .join("") +
//     `<input type="number" id="customWithdraw" placeholder="Custom Amount">
//     <button onclick="customWithdraw()">Custom</button>`;
// }

// // Function to handle preset withdrawal
// function withdraw(amount) {
//   if (amount <= balance) {
//     balance -= amount;
//     updateMessage(
//       `You withdrew $${amount}. New balance: $${balance.toFixed(2)}.`
//     );
//   } else {
//     updateMessage("Insufficient funds. Please try a smaller amount.");
//   }
//   // clearExtra();
// }

// // Function to handle custom withdrawal
// function customWithdraw() {
//   const customAmount = parseFloat(
//     document.getElementById("customWithdraw").value
//   );
//   if (!isNaN(customAmount) && customAmount > 0) {
//     if (customAmount <= balance) {
//       balance -= customAmount;
//       updateMessage(
//         `You withdrew $${customAmount.toFixed(
//           2
//         )}. New balance: $${balance.toFixed(2)}.`
//       );
//     } else {
//       updateMessage("Insufficient funds. Please try a smaller amount.");
//     }
//   } else {
//     updateMessage("Invalid withdrawal amount. Please try again.");
//   }
//   // clearExtra();
// }

// // Function to logout
// function logout() {
//   // clearExtra();
//   updateMessage("You are logged out.");
//   document.querySelector(".actions").style.display = "none";
// }
