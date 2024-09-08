window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loan = { amount: 25000, years: 15, rate: 25 }
  const amtInput = document.querySelector("#loan-amount")
  amtInput.value = loan.amount
  const durInput = document.querySelector("#loan-years")
  durInput.value = loan.years
  const rateInput = document.querySelector("#loan-rate")
  rateInput.value = loan.rate
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentInputs = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(currentInputs))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthRate = (values.rate / 100) / 12
  const n = Math.floor(values.years * 12)
  return (
    (monthRate * values.amount) / (1 - Math.pow(( 1 + monthRate), -n ))).toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthInput = document.querySelector("#monthly-payment")
  monthInput.innerText = "$" + monthly
}
