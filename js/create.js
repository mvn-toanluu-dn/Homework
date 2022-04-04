
var products = JSON.parse(localStorage.getItem("products"))|| [];
function createProduct() {
  var createProducts = document.getElementById('form-create');
  var id = document.getElementById("id").value;
  var productName = document.getElementById("product-name").value
  var price = document.getElementById("price").value
  var upfile = document.getElementById("upfile").value
  var product = {id, productName, price, upfile}; 

  products.push(product);
  console.log(productName)
  localStorage.setItem("products", JSON.stringify(products));
 }
console.log(products);

// var products = []

// function addProduct(){
//   var productName = document.getElementById("product-name")
//   var price = document.getElementById("price")
//   let product ={
//     name: productName.value,
//     price: price.value,
//   }
//   products.push(product)

// }
// console.table(products)

// addProduct()