
let insertText = document.getElementById('text-input')
let paragraf = document.getElementById('meme-text')
let btnI = document.getElementById('meme-insert')
let board = document.getElementById('meme-image-container')
let canvas = document.getElementById('meme-image')
let btnFire = document.getElementById('fire')
let btnWater = document.getElementById('water')
let btnEarth = document.getElementById('earth')
let meme1 = document.getElementById('meme-1')
let meme2 = document.getElementById('meme-2')
let meme3 = document.getElementById('meme-3')
let meme4 = document.getElementById('meme-4')

//criando atalhos ^

insertText.addEventListener('keyup',changeText)
btnI.addEventListener('click',bkgdSet)
 
function changeText () {
    
    paragraf.innerText = insertText.value

}

//add texto ao meme ^

function bkgdSet (){
canvas.src = URL.createObjectURL(btnI.files[0]);
}
//Seta a imagem do meme ^

function bkgdSetII (meme){
  console.log('MEMEME')
  canvas.src = meme.target.src
  }
  //Seta a imagem do meme pré definido ^

function BordaFogo (){
  board.style.border = 'dashed red 3px'
}
//muda propriedades da borda ^
function BordaAgua (){
  board.style.border = 'double blue 5px'
}
//muda propriedades da borda ^
function BordaTerra (){
  board.style.border = 'groove green 6px'
}
//muda propriedades da borda ^


btnI.addEventListener('change',bkgdSet)
btnFire.addEventListener('click',BordaFogo )
btnWater.addEventListener('click',BordaAgua )
btnEarth.addEventListener('click',BordaTerra )

meme1.addEventListener('click',bkgdSetII)
meme2.addEventListener('click',bkgdSetII)
meme3.addEventListener('click',bkgdSetII)
meme4.addEventListener('click',bkgdSetII)
//Ouvintes de evento






