$productList = document.querySelector(".product-list");

var $products = [
  {
    id: 1,
    title: "Sách Hay",
    price: 5000,
    src: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/4.jpg",
  },
  {
    id: 2,
    title: "Sách hay 2",
    price: 7000,
    src: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
  },
  {
    id: 3,
    title: "Sách hay 3",
    price: 8000,
    src: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/8.jpg",
  },
  {
    id: 4,
    title: "Sách hay 4",
    price: 6000,
    src: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/5.jpg",
  },
];

var html = "";
for (var i = 0; i < $products.length; i++) {
  html +=
  '<li class="product-item col-3">' + 
  '<div class="product-image">' +
  '<a href="#" ><img src =' +
  $products[i].src +
  ' class=  "product-img"></a>' +
  "</div>" +
  '<div class= "product-info">' +
  '<h3 class= "product-title">' +
  $products[i].title +
  " </h3>" +
	'<p>$<span class= "product-price">' +
  $products[i].price +
  "</span></p>" +
  "</div>" +
  '<div class= "item-btn">' +
  '<button class="btn-product btn-primary" onclick="addCart(this)" type="button">Add to Cart</button>' +
  "</div>" +
	"</li>";
}

$productList.innerHTML = html;

var myCart = [];
//add card
function addCart($this) {
	var current = $this.parentElement.parentElement;
	var productImage = current.children[0].children[0].children[0];
	var srcImage = productImage.Image;
	var productInfo = current.children[1];
	var nameProduct = productInfo.children[0].outerText;
	var amountProduct = 1;
	var priceProduct = productInfo.children[1].lastElementChild.outerText;
	var itemCart = [nameProduct, amountProduct, priceProduct, srcImage];
	myCart.push(itemCart);
	var countProduct = myCart.length;
	document.querySelector(".count-product").textContent = countProduct;
	$this.disabled = true;
	sessionStorage.setItem("cart", JSON.stringify(myCart));
	console.log($this);
}

//ShowCountProduct
function showCountProduct() {
	var cart = JSON.parse(sessionStorage.getItem("cart"));
	document.querySelector(".count-product").textContent = cart.length;
}
showCountProduct();