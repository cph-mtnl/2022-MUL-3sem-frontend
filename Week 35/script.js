// Load event listener med arrow function
window.addEventListener("load", async () => {
  // Await data to be fetched from endpoint
  const result = await fetch(
    "https://mul3sem-default-rtdb.europe-west1.firebasedatabase.app/transactions.json"
  );
  // Result er det overordnede HTTP response
  console.log(result);
  // Her får vi data:
  const data = await result.json();
  console.log(data);

  // the new array
  const items = [];
  // Traditionelt for loop
  //
  for (item in data) {
    // Do not worry about this.
    items.push(data[item]);
  }
  // But the result is an array:
  console.log(items);

  // Modern for loops
  items.forEach((item) => {
    console.log(item);
    /* data:
      category: "Home"
      credit_card_company: "American Express"
      price: "90.95"
      transaction_date: "2018-03-17T05:51:36.152+01:00"
    */
    // Trækker data ud fra JSON objektet, til 4 nye variabler
    const category = item.category;
    const card = item.credit_card_company;
    const price = item.price;
    const date = item.transaction_date;

    const element = `<div class="box">
      <h1>${category}</h1>
      <p>Kort udbyder: ${card}</p>
      <p>Beløb: ${price}</p>
      <p>${date}</p>
     </div>`;

    const div = document.querySelector(".container");
    div.innerHTML = div.innerHTML + element;
  });
});

// Objekt eksempel
const testObjekt = {
  a: "transaction data",
  b: "transaction data",
  c: "transaction data",
};

console.log(testObjekt["a"]);
testObjekt.a;
