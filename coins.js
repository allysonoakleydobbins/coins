function getChange() {

  var dollars = document.getElementById('input').value;
  console.log("dollars:", dollars);
  
  var coinPurse = {};
  
  coinPurse.toQuarters = Math.floor(dollars / 0.25);
  console.log("Quarters", coinPurse.toQuarters);
  document.getElementById('quarterAmount').innerHTML = coinPurse.toQuarters;
  
  coinPurse.toDimes = Math.floor((dollars % 0.25)/0.10);
  console.log("Dimes", coinPurse.toDimes);

  coinPurse.toNickels = Math.floor(((dollars % 0.10)/0.05));  
  console.log("Nickels", coinPurse.toNickels);

  coinPurse.toPennies = Math.floor(((dollars % 0.05)/0.01).toFixed(2));
  console.log("Pennies", coinPurse.toPennies);

};

var button = document.getElementById("convertButton");
button.addEventListener("click", getChange);