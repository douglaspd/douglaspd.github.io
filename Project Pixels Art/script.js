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

const clear = () =>{
    
    const myButton = document.querySelector('.clear-button');
    const color = document.querySelectorAll('.pixel');
   
    for(let i=0; i< color.length; i+=1){
        let div = color[i];
        myButton.addEventListener('click', ()=>{
            div.style.backgroundColor = '';
        })
    }
}
clear ();



