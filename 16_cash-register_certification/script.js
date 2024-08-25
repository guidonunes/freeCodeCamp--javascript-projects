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
  priceScreen.innerHTML = `<h3>Price: $${price.toFixed(2)}</h3>`;

  // Display cash drawer
  cashDrawerDisplay.innerHTML = '<h3>Cash Drawer Contents: </h3>';
  cid.forEach(([denomination, amount]) => {
    cashDrawerDisplay.innerHTML += `<p>${denomination}: $${amount.toFixed(2)}</p>`;
  });
};

const checkCashRegister = (price, cash, cid) => {
  if (price > cash) {
    changeDue.innerHTML = '<p class="text-danger">Customer does not have enough money to purchase the item</p>';
    return;
  }
}


displayCashDrawer();
