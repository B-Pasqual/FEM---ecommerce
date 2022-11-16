//! Variáveis e constantes -------------------------------------------

const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];
let indice = 0;

//! DOM Selectors ---------------------------------------------------
const setaDireita = document.querySelector('.right_arrow');
const setaEsquerda = document.querySelector('.left_arrow');
const imageContainer = document.querySelector('.big_image');
//minus and plus buttons
const minusBtn = document.querySelector('.minus_icon');
const plusBtn = document.querySelector('.plus_icon');
//Number items
const numeroProdutos = document.querySelector('.number_items');
//! cart --
//Onde fica o produto no cart
const cardProduto = document.querySelector('.first_row');
//Cart icon
const cartIcon = document.getElementById('cart_icon');
//cart modal
const cartModal = document.querySelector('.cart_modal');
//cart details
const cartDetails = document.querySelector('.cart_details');
//add to cart
const addCart = document.getElementById('add_cart');
//Number in the cart
const cartNumber = document.querySelector('.number_in_cart');
//Lixeira (limpa cart)
const limpaCarrinho = document.getElementById('lixo');

//! Funções ---------------------------------------------------------

function checaNumero(operador) {
  let valor = Number(numeroProdutos.innerHTML);
  operador == 'positivo' ? valor++ : valor--;
  numeroProdutos.innerHTML = valor;
}

function calculaValor() {
  let valor = Number(numeroProdutos.innerHTML);
  let total = 125.0 * valor;
  cartDetails.innerHTML = `<p class="product_name">Autumn Limited Edition</p>
  <p>$125.00 x ${valor}    <strong>$${total.toFixed(2)}</p></strong>`;
  atualizaQtd(valor);
}

function atualizaQtd(quantidade) {
  cartNumber.innerHTML = quantidade;
}

//! Event Handlers ---------------------------------------------------

setaDireita.addEventListener('click', () => {
  indice == 3 ? (indice = 0) : (indice += 1);
  imageContainer.style.backgroundImage = `url(${images[indice]})`;
  console.log(indice);
});

setaEsquerda.addEventListener('click', () => {
  indice == 0 ? (indice = 3) : (indice -= 1);
  imageContainer.style.backgroundImage = `url(${images[indice]})`;
  console.log(indice);
});

//! ---- plus and minus
//Botões de adicionar e diminuir valor na quantidade de itens

minusBtn.addEventListener('click', () => {
  checaNumero('negativo');
});

plusBtn.addEventListener('click', () => {
  checaNumero('positivo');
});

//! ---- Cart icon
cartIcon.addEventListener('click', () => {
  cartModal.classList.toggle('hidden');
  cartModal.classList.toggle('animate');
});

//! ---- Add cart
addCart.addEventListener('click', () => {
  calculaValor();
});

//! ---- Clean cart (lixeira)
limpaCarrinho.addEventListener('click', () => {
  cardProduto.innerHTML = 'Carrinho vazio :(';
});
