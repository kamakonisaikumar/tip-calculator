const billinput = document.getElementById('bill');
const tipinput = document.getElementById('tip');
const btnEl = document.getElementById('calculate');
const totalspan = document.getElementById('total');

function caculateTotal(){
  const billvalue = billinput.value;
  const tipvalue  = tipinput.value;
  const totalspanvalue = billvalue * (1 + tipvalue / 100);
  
  totalspan.innerText = totalspanvalue.toFixed(2);
}

btnEl.addEventListener("click",caculateTotal);