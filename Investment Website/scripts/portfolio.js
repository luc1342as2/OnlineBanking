// Investment Data
const investments = [
  { date: "2024-01-10", maturationDate: "2025-01-10", name: "Mario", lastName: "Bros", amount: 10000 },
  { date: "2024-02-15", maturationDate: "2026-02-15", name: "Luigi", lastName: "Bros", amount: 5000 },
  { date: "2024-03-20", maturationDate: "2027-03-20", name: "Peach", lastName: "Toadstool", amount: 8000 },
  { date: "2024-04-25", maturationDate: "2028-04-25", name: "Yoshi", lastName: "Dino", amount: 6000 }
];

// Populate Investment Table
const investmentTable = document.getElementById("investment-table");
const updateForm = document.getElementById("update-investment-form");
let updateIndex = null; // To keep track of the investment being updated

function populateTable() {
  investmentTable.innerHTML = ""; // Clear the table
  investments.forEach((investment, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${investment.date}</td>
          <td>${investment.maturationDate}</td>
          <td>${investment.name}</td>
          <td>${investment.lastName}</td>
          <td>$${investment.amount.toFixed(2)}</td>
          <td>
              <button onclick="deleteInvestment(${index})">Delete</button>
              <button onclick="editInvestment(${index})">Update</button>
          </td>
      `;
      investmentTable.appendChild(row);
  });
}

populateTable();

// Add New Investment
document.getElementById("add-investment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = document.getElementById("investment-date").value;
  const maturationDate = document.getElementById("investment-maturation-date").value;
  const name = document.getElementById("investment-name").value;
  const lastName = document.getElementById("investment-lastname").value;
  const amount = parseFloat(document.getElementById("investment-amount").value);

  if (date && maturationDate && name && lastName && !isNaN(amount)) {
      investments.push({ date, maturationDate, name, lastName, amount });
      populateTable();
      e.target.reset(); // Clear the form
  } else {
      alert("Please fill in all fields with valid data.");
  }
});

// Delete Investment
function deleteInvestment(index) {
  investments.splice(index, 1); // Remove the investment at the given index
  populateTable();
}

// Edit/Update Investment
function editInvestment(index) {
  updateIndex = index; // Store the index for updating
  const investment = investments[index];

  // Pre-fill the update form with the existing values
  document.getElementById("update-date").value = investment.date;
  document.getElementById("update-maturation-date").value = investment.maturationDate;
  document.getElementById("update-name").value = investment.name;
  document.getElementById("update-lastname").value = investment.lastName;
  document.getElementById("update-amount").value = investment.amount;

  // Show the update form
  updateForm.style.display = "block";
}

// Handle Update Submission
document.getElementById("update-investment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = document.getElementById("update-date").value;
  const maturationDate = document.getElementById("update-maturation-date").value;
  const name = document.getElementById("update-name").value;
  const lastName = document.getElementById("update-lastname").value;
  const amount = parseFloat(document.getElementById("update-amount").value);

  if (date && maturationDate && name && lastName && !isNaN(amount)) {
      // Update the investment
      investments[updateIndex] = { date, maturationDate, name, lastName, amount };
      populateTable();
      updateForm.style.display = "none"; // Hide the update form
      e.target.reset(); // Clear the form
  } else {
      alert("Please fill in all fields with valid data.");
  }
});

