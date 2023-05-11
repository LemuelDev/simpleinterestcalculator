const principalValue = document.querySelector('#prin-value');
const interestRate = document.querySelector('#rate');
const time = document.querySelector('#time');
const errormsg = document.getElementById('errormsg');
const mySelect = document.querySelector('#mySelect');
const calcu = document.querySelector('#calcu');
const result = document.getElementById('result');

calcu.addEventListener('click', () => {
    if (!principalValue.value || !interestRate.value || !time.value ) {
        errormessage();
    }else {
        errormsg.innerHTML = '';
        calculation()
    }
   
})


function errormessage() {
    if (!principalValue.value) {
      errormsg.innerHTML = 'Principal Value is missing.'
    } else if (!interestRate.value) {
      errormsg.innerHTML = 'Interest Rate is missing.'
    } else if (!time.value) {
      errormsg.innerText = 'Time is missing.'
    }
  }


function calculation(){

    if (mySelect.value === 'years') {
        result.value = ((principalValue.value * (interestRate.value / 100)) * time.value ).toFixed(2); 
    } else if (mySelect.value === 'months') {
       result.value = ((principalValue.value * (interestRate.value / 100)) * time.value / 12 ).toFixed(2);
     }else {
       result.value = ((principalValue.value * (interestRate.value / 100)) * time.value / 360 ).toFixed(2);
    }


}



