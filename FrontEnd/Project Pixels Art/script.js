const square = () => {
const squareContainer = document.getElementById('pixel-board');

for (let i = 0; i < 25 ; i +=1){
    let newSquare = document.createElement('div');
    newSquare.classList.add('pixel');
    squareContainer.appendChild(newSquare);
    }
}
square()   

const click = () => {

const newColor = document.getElementsByClassName('color');

for(index=0; index<newColor.length; index+=1){
    let colorSelected = newColor[index];
    colorSelected.addEventListener('click',(event) => {

        const selected= document.querySelector(".selected")
        event.target.classList.add("selected")
        if(selected){
            selected.classList.remove('selected')
        }
    })
   }
 }
 click()

 const pixel = () => {
    const palette = document.getElementById('color-palette');
    const selectedColor = palette.getElementsByClassName('color');
    const div = document.getElementById('pixel-board');
    const divColor = div.getElementsByClassName('pixel');
           
    for(let i=0; i < selectedColor.length; i+=1){
        let corSelecionada = selectedColor[i];
            corSelecionada.addEventListener('click' , ()=> {
            const newColor = corSelecionada.style.backgroundColor;
                for(let i=0 ; i < divColor.length; i+=1){
                    let paintPixel = divColor[i];
                    paintPixel.addEventListener('click', () =>{
                        paintPixel.style.backgroundColor = newColor;
                    });
                   }                 
                })                     
            }
        };
pixel();

const clear = () => {
    
    const myButton = document.querySelector('.clear-button');
    const color = document.querySelectorAll('.pixel');
   
    for(let i=0; i< color.length; i+=1){
        let div = color[i];
        myButton.addEventListener('click', ()=>{
            div.style.backgroundColor = 'white';
        })
    }
}
clear ();

const randomColor = () => {

    const buttonRandom = document.getElementById('button-random-color');
    buttonRandom.addEventListener('click', () => {

    const palette = document.getElementById('color-palette');
    const color = palette.getElementsByClassName('color');
    const pixelBoard = document.getElementById('pixel-board');
    const pixel = pixelBoard.getElementsByClassName('pixel');
    const coresAleatorias= [];

    for( let i = 0; i < color.length ; i+=1){
        coresAleatorias.push(color[i].style.backgroundColor);
    }
    for (let i = 0 ; i < pixel.length; i +=1){
        let pixels = pixel[i];
        let corAleatoriaIndex = Math.floor(Math.random() * coresAleatorias.length);
        pixels.style.backgroundColor = coresAleatorias[corAleatoriaIndex];      
        }
     })
};

randomColor();

const salvarPixel = () => {
    const pixel = JSON.parse(localStorage.getItem('desenho')) || [];

    const quadro = document.getElementsByClassName('pixel')

    const desenho = [];

    for( let i=0; i < quadro.length; i+=1){
        desenho.push(quadro[i].style.backgroundColor);
        console.log((quadro[i]).style.backgroundColor);
    }
    localStorage.setItem('desenho', JSON.stringify(desenho));
    console.log(desenho);
};

salvarPixel();

