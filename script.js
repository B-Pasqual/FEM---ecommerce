//! Variáveis e constantes ------------------------------------------

const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];
let indice = 0;

//! DOM Selectors -----------------------------------------------------

const setaDireita = document.querySelector('.right_arrow');
const setaEsquerda = document.querySelector('.left_arrow');
const imageContainer = document.querySelector('.big_image');
const containerPrincipal = document.querySelector('.container');
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
let limpaCarrinho = document.querySelectorAll('.lixo');
//Imagem do produto
let ImagemProduto = document.querySelector('.product_img-cart');
//Cards trocadores de imagens
let cards = document.querySelectorAll('.card');
//todo Seleções para o modal ------
const cardsx = document.querySelectorAll('.cardx');
const containerImgGrande = document.querySelector('.imagem_grande');
const botaoFechaModal = document.querySelector('.close_button');
const modalProduto = document.querySelector('.container_modal');
//todo close modal -------
const closeModal = document.querySelector('.close_modal_button');
const modalMenu = document.querySelector('.hamburguer_menu_hover');
const menuModal = document.querySelector('.menu_modal');
const hamburguerMenu = document.querySelector('.hamburger_menu');
//! Funções -----------------------------------------------------------

function checaNumero(operador) {
  let valor = Number(numeroProdutos.innerHTML);
  if (operador == 'positivo') {
    valor++;
  } else {
    if (valor != 0) valor--;
  }

  // operador == 'positivo' ? valor++ : valor--;
  numeroProdutos.innerHTML = valor;
}

//Função que pega o valor de entrada e cálcula o valor total, também executa a função de atualizar o valor no carrinho e a de alterar o elemento .cardDetails com os valores.

function calculaValor() {
  let valor = Number(numeroProdutos.innerHTML);
  let total = 125.0 * valor;
  atualizaQtd(valor);
  alteraElemento(valor, total);
}

function alteraElemento(valor, total) {
  cartDetails.innerHTML = ` <p class="product_name">Autumn Limited Edition</p>
  <p>$125.00 x ${valor}  <strong>$${total.toFixed(2)}</strong></p>`;
}

//Função para atualizar o número de itens no carrinho
function atualizaQtd(quantidade) {
  cartNumber.innerHTML = quantidade;
}

//Função para remover a classe .active nos cardsImages (os cards que alteram o container maior)
function removeActive() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}

function removeActive2() {
  cardsx.forEach((cardx) => {
    cardx.classList.remove('active');
  });
}

//Função que irá trocar a imagem da div maior, com base na imagem menor selecionada
function trocaImagem(index) {
  imageContainer.style.backgroundImage = `url(${images[index]})`;
}

function trocaImagem2(index) {
  containerImgGrande.style.backgroundImage = `url(${images[index]})`;
}

//! Event Handlers -----------------------------------------------------

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
  cartModal.classList.toggle('active');
});

//! ---- Add cart
addCart.addEventListener('click', () => {
  calculaValor();
  console.log(limpaCarrinho);
  ImagemProduto.classList.remove('hidden');
});

//! ---- Clean cart (lixeira)
limpaCarrinho.forEach((lixo) => {
  lixo.addEventListener('click', () => {
    atualizaQtd(0);
    console.log('estou sendo clicado');
    cartDetails.innerHTML = 'Carrinho vazio :(';
    ImagemProduto.classList.add('hidden');
    numeroProdutos.innerHTML = 0;
  });
});

cards.forEach((card, index) => {
  cards[index].style.backgroundImage = `url(${images[index]})`;
  card.addEventListener('click', () => {
    removeActive();
    card.classList.toggle('active');
    trocaImagem(index);
  });
});

//! ------ Product modal
cardsx.forEach((cardx, index) => {
  cardsx[index].style.backgroundImage = `url(${images[index]})`;
  cardx.addEventListener('click', () => {
    removeActive2();
    cardx.classList.toggle('active');
    trocaImagem2(index);
  });
});

botaoFechaModal.addEventListener('click', () => {
  modalProduto.style.display = 'none';
});

imageContainer.addEventListener('click', () => {
  modalProduto.style.display = 'flex';
});

// document.addEventListener('keypress', function (evento) {
//   console.log(evento.key);
// });

closeModal.addEventListener('click', () => {
  modalMenu.style.display = 'none';
  menuModal.style.display = 'none';
});

hamburguerMenu.addEventListener('click', () => {
  menuModal.style.display = 'flex';
  modalMenu.style.display = 'block';
});
