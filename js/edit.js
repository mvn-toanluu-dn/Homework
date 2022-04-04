var productJS = localStorage.getItem("products")|| [];
var products = JSON.parse(productJS);
var idProductJS = localStorage.getItem("idProduct");
var idProduct = JSON.parse(idProductJS);
console.log(products)

function showProduct(index) {
  for (var i = 0; i < products.length; i++) {
    if(products[i].id == index){
      document.getElementById("id").value = products[i].id;
      document.getElementById("product-name").value = products[i].productName;
      document.getElementById("price").value = products[i].price;
      document.getElementById("upfile").value = products[i].upfile;    
    }
  }
}
showProduct(idProduct);
document.getElementById('btn-update').addEventListener('click',function updateProduct(){
  var idPr = document.getElementById("id").value;
  var prName = document.getElementById("product-name").value;
  var prPrice = document.getElementById("price").value;
  var prImg = document.getElementById("upfile").value;
  for (var i = 0; i < products.length; i++) {
    if(products[i].id == idProduct){
      products[i].id = idPr;
      products[i].productName = prName;
      products[i].price = prPrice;
      products[i].prImg = src;
    }}
  localStorage.setItem("products", JSON.stringify(products));
});