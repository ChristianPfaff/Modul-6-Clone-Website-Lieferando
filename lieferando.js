let shopingBasket = [];
let prices = [];
let quantities = [];

function addToBasked(number1, text, number2) {

  if (shopingBasket.includes(text)) {
    return;
  }
  quantities.push(number1);
  shopingBasket.push(text);
  prices.push(number2);


  showBasked();
}

function showBasked() {

  document.getElementById('id-basket').innerHTML = "";


  for (let i = 0; i < shopingBasket.length; i++) {

    let name = shopingBasket[i];
    let price = prices[i].toFixed(2);
    let quant = quantities[i];
    let totalPrice = price * quant;

    document.getElementById('id-basket').innerHTML += `
     
        <table id="output">
          <tr>
            <td>${quant}x</td>
            <td>${name}</td>
            
            <td class="edit-amount"><button onclick="count(0, '${name}')">-</button><button onclick="count(1, '${name}')">+</button><img src="img/edit-2-48.png" /> </td>
            <td class="edit-amount" >${totalPrice.toFixed(2)} €&nbsp<img onclick="deleteItem('${name}')" src="img/trash-4-48.png" /></td>            
          </tr>
        </table>                     
         
   `;
    sumPrice();
  }

}

function count(k, name) {
  const position = shopingBasket.indexOf(name);
  let j = quantities[position];

  if (k == 0) {
    if (j <= 1) {
      return;
    }
    else {
      (quantities[position])--;
    }
  }

  if (k == 1) {
    (quantities[position])++;
  }

  showBasked();
}

function deleteItem(name) {
  const position = shopingBasket.indexOf(name);
  quantities.splice(position, 1);
  shopingBasket.splice(position, 1);
  prices.splice(position, 1);
  showBasked();
}

function sumPrice() {
  let sum = 0;
  let deliveryCost = 8.00;

  let finalCost = 0;

  for (let i = 0; i < shopingBasket.length; i++) {
    sum = sum + quantities[i] * prices[i];
  };

  finalCost = sum + deliveryCost;

  document.getElementById('id-basket-2').innerHTML = "";
  document.getElementById('id-basket-2').innerHTML += `
    <hr>
    <div>
      <table class="table-style-2">
        <tr>
          <td>Zwischensumme</td><td class="txt-right">${sum.toFixed(2)} €</td>        
        </tr> 
        <tr>
          <td>Lieferkosten</td><td class="txt-right">${deliveryCost.toFixed(2)} €</td>
        </tr> 
        <tr>
          <td><b>Gesamt</b></td><td class="txt-right"><b>${finalCost.toFixed(2)} €</b></td>
        </tr>  
      </table>                      
    </div> 
  `;
}

