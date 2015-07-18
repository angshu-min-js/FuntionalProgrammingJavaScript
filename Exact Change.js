var currency = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

function bill(amount,cid){
  return currency.map(function(coins){ 
    var amt=Math.floor(amount/coins[1]) * coins[1],
        cidamt = cid.filter(function(draw){return draw[0]===coins[0];})[0][1];
    if(amt>cidamt)
       amt=cidamt;
    amount=Math.round((amount-amt)*1000)/1000;
    console.log(amount);
    return [coins[0],amt];
    
  }).filter(function(fil){return fil[1];});
}

function drawer(price, cash, cid) {
  var change = cash-price,
      total=cid.reduce(function(pre,cur){return pre+cur[1];},0);
      if(total < change) return 'Insufficient Funds'; 
      else if(total===change) return 'Closed';
      else return bill(change,cid);
  // Here is your change, ma'am.
  //return output;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]
//drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
