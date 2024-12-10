const message = document.querySelector("#message");
const balanceCheck = document.querySelector(".balanceCheck");
let balance = 10000;
const checkBalance = () => {
  console.log(balance);
  if (message.textContent === "Balance is hidden") {
    message.textContent = `Your current balance is $${balance}.`;
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
