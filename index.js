//Para que cada botão execute uma função sem termos que repetir o código
// 1. Vamos criar uma var para saber quantos botoes existem do tipo .drum
// 2. Criar um Loop for com a variacao de 0 - qtd de botoes para repetir a ação.
// 3. Estabelecer a acao com o addEventListener que associa um Type com uma funcao


// Detectar qual BOTAO foi pressionado:
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  })
}


// Detectar qual letra do teclado foi pressionada (em todo o documento):
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

}
)


// Especificar qual som cada botão/letra devem fazer:
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;

    case "s":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();

      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    default:

  }
}

// 1. Animando os botões para que o usuário veja qual está pressionando (obs: as classes dos instrumentos são .currentkey - ex: ".w"):
// 2. Aqui também add uma classe de estilo ao nosso botão usando o .classList.add
// 3. Por fim, estabelecer um tempo para a animação (sua funcao de saída em quanto tempo - milisegundos).

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey)

activeButton.classList.add("pressed");

setTimeout (function(){
  activeButton.classList.remove("pressed"),
  300
})

}




  // AGORA Fazendo sem o loop:

  /*
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  this.style.color = "white";

  function allBtns() {
    var tom1 = new Audio();
    tom1.src = "sounds/tom-1.mp3";
    tom1.play();
  }
  */
