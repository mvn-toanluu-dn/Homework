$tbody = document.getElementById("tbody");
var productList = localStorage.getItem("products");
var products = JSON.parse(productList);

function showProductList() {
  var html = "";
  for (var i = 0; i < products.length; i++){
    html += `
    <tr>
    <td>${products[i].id}</td>
    <td><img src=${products[i].src}></td>
    <td>${products[i].productName}</td>
    <td>${products[i].price}</td>
    <td>
    <button type="button" onclick="updateProduct(this)"><a href = "./edit.html"><i class="fa-solid fa-pencil"></i></button>
    <button type="button" onclick="removeProduct(${i})"><i class="fa-solid fa-trash"></i><button>
    </td>
    </tr>
    `;
  };
  $tbody.innerHTML = html;
}
showProductList();

function removeProduct(index) {
  for (var i = 0; i < products.length; i++) {
    if(i === index) {
      products.splice(i, 1);
      localStorage.setItem("products", JSON.stringify(products));
      showProductList()
    }
  }
  // location.reload();
}

function updateProduct($this){
const trParent = $this.parentElement.parentElement;
const idProduct = trParent.children[0].outerText;
localStorage.setItem("idProduct", JSON.stringify(idProduct));
}
// function updateProduct(index) {
//   for (var i = 0; i < products.length; i++) {
//     if(i === index){
//       document.getElementById("id").value = products[i].idProduct;
//       document.getElementById("product-name").value = products[i].productName;
//       document.getElementById("price").value = products[i].price;
//       document.getElementById("upfile").value = products[i].upfile;
//     }
//     updateProduct.setAttribute("id", index);
  
//     localStorage.setItem("products", JSON.stringify(products));
//     console.log(products);
//   }
//   }
//   updateProduct(idProduct); 
// function updateProduct(index) {
//   for (var i = 0; i < products.length; i++) {
//     if (i === index) {
//       document.getElementById("productName").value = products[i].productName
//       document.getElementById("price").value = products[i].price
//       document.getElementById("upfile").value = products[i].upfile
//     }
//   }
//   console.log(indxex)
//   localStorage.setItem("products", JSON.stringify(products));

//   showProductList();
// }
