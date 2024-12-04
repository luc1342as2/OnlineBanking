// Account Information
const accountDetails = {
    accountNumber: "123456789",
    name: "Mario",
    lastName: "Bros",
    balance: 14200.75
  };

  // Transaction Data
  const transactions = [
    { date: "2024-12-01", description: "Salary Deposit", amount: 3000 },
    { date: "2024-12-02", description: "Grocery Shopping", amount: -150 },
    { date: "2024-12-03", description: "Utility Bill", amount: -120 },
    { date: "2024-12-04", description: "Freelance Payment", amount: 500 },
    { date: "2024-12-05", description: "Gas", amount: -55 },
    { date: "2024-12-06", description: "Dinner", amount: -65 },
    { date: "2024-12-07", description: "Groceries", amount: -130 }
  ];

  // Display Account Information
  document.getElementById("account-number").textContent = accountDetails.accountNumber;
  document.getElementById("name").textContent = accountDetails.name;
  document.getElementById("last-name").textContent = accountDetails.lastName;
  document.getElementById("account-balance").textContent = accountDetails.balance.toFixed(2);

  // Populate Transaction Table
  const transactionTable = document.getElementById("transaction-table");
  transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.description}</td>
      <td>${transaction.amount < 0 ? "-" : ""}$${Math.abs(transaction.amount).toFixed(2)}</td>
    `;
    transactionTable.appendChild(row);
  });