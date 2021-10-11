let i = 1;
let qtdItem = document.getElementById("qtdItem").value;

function AddQtd() {
  i++;
  document.getElementById("qtdItem").value = i;
}

function LessQtd() {
  if (i >= 2) {
    i = i - 1;
    document.getElementById("qtdItem").value = i;
  }
}

// Active the Images to display then on largest size

let header = document.getElementById("selector__imgs");
let btns = header.getElementsByClassName("btn");
let activeBtn = header.getElementsByClassName("active");

let BigImage = document.getElementsByClassName("center__img");
for (var j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    console.log(current);
    this.className += " active";
  });
}

//Add to cart product

let products = [];
let qtd = [];
let productName;
let qtdProd;
let itemsAmount = 0;

function AddToCart() {
  itemsAmount = itemsAmount + 1;
  productName = $(".product__name").text();
  qtdProd = $("#qtdItem").val();
  products = {
    name: productName,
    quantidade: qtdProd,
  };

  $(".itens__amount").text(itemsAmount);

  console.log(products);
}
