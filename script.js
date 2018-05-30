/* JavaScript code here */
//task 5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//a)--------------------    
var newItem= {
    name: 'watch',
    price: 64,
    quantity: 1
};

function addItem(newItem){
    cart.push(newItem);
}
addItem(newItem);

function sortsTheCart(a, b)
{
    return a.quantity - b.quantity;
}
cart.sort(sortsTheCart);

function findByName(items)
{ 
    return items.name === 'Regular Tees';
}
console.log(cart.find(findByName)); 

var totalCost  = cart.reduce(function(sum, d) {
  return sum + d.price;
}, 0);
console.log(totalCost);