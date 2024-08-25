const changeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

let price = 3.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayCashDrawer = () => {
  priceScreen.innerHTML = `<h6>Price: $${price.toFixed(2)}</h6>`;

  // Display cash drawer
  cashDrawerDisplay.innerHTML = '<h6>Cash Drawer Contents: </h6>';
  cid.forEach(([denomination, amount]) => {
    cashDrawerDisplay.innerHTML += `<p>${denomination}: $${amount.toFixed(2)}</p>`;
  });
};

const checkCashRegister = () => {
  let customerCash = parseFloat(cash.value);
  let change = customerCash - price;

  if (price > customerCash) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (price === customerCash) {
    changeDue.innerHTML = '<p class="text-success">No change due - customer paid with exact cash</p>';
    cash.value = ''; // Clear the input field
    return;
  }

  let changeArr = [];
  const currencyUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  // Handle the case where total cash in drawer equals the change due
  if (totalCid === change) {
    cid.forEach(([name, amount], index) => {
      if (amount > 0) {
        changeArr.push(`${name}: $${amount.toFixed(2)}`);
        cid[index][1] = 0; // Empty the cash drawer
      }
    });
    changeDue.innerHTML = `<p class="text-success">Status: CLOSED ${changeArr.join(' ')}</p>`;
    cash.value = ''; // Clear the input field
    displayCashDrawer(); // Update the displayed cash drawer
    return;
  }

  if (totalCid < change) {
    changeDue.innerHTML = '<p class="text-danger">Status: INSUFFICIENT_FUNDS</p>';
    cash.value = ''; // Clear the input field
    return;
  }

  for (let i = 0; i < currencyUnits.length; i++) {
    let coinName = currencyUnits[i][0];
    let coinValue = currencyUnits[i][1];
    let coinIndex = cid.findIndex(([name]) => name === coinName);
    let coinAmount = cid[coinIndex][1];
    let amountFromDrawer = 0;

    while (change >= coinValue && coinAmount >= coinValue) {
      change -= coinValue;
      change = Math.round(change * 100) / 100; // Avoid floating point issues
      coinAmount -= coinValue;
      amountFromDrawer += coinValue;
    }

    if (amountFromDrawer > 0) {
      changeArr.push(`${coinName}: $${amountFromDrawer.toFixed(2)}`);
      cid[coinIndex][1] = coinAmount; // Update the cash drawer with the remaining amount
    }
  }

  if (change > 0) {
    changeDue.innerHTML = '<p class="text-danger">Status: INSUFFICIENT_FUNDS</p>';
  } else {
    changeDue.innerHTML = `<p class="text-success">Status: OPEN ${changeArr.join(' ')}</p>`;
  }

  // Clear the input field for the next transaction
  cash.value = '';

  // Update and display the cash drawer after the transaction
  displayCashDrawer();
};

displayCashDrawer();

purchaseBtn.addEventListener('click', checkCashRegister);
