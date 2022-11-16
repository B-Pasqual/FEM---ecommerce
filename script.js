const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];
let indice = 0;

//! Funções ---------------------------------------------------------

function checaNumero(operador) {
  let valor = Number(numeroProdutos.innerHTML);
  operador == 'positivo' ? valor++ : valor--;
  numeroProdutos.innerHTML = valor;
}

//! DOM Selectors ---------------------------------------------------
const setaDireita = document.querySelector('.right_arrow');
const setaEsquerda = document.querySelector('.left_arrow');
const imageContainer = document.querySelector('.big_image');
//minus and plus buttons
const minusBtn = document.querySelector('.minus_icon');
const plusBtn = document.querySelector('.plus_icon');
//Number items
const numeroProdutos = document.querySelector('.number_items');

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

//! plus and minus
//Botões de adicionar e diminuir valor na quantidade de itens

minusBtn.addEventListener('click', () => {
  checaNumero('negativo');
});

plusBtn.addEventListener('click', () => {
  checaNumero('positivo');
});
