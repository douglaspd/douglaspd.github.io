
const AlterarBackgroundColor = () =>{

    const inputColor = document.getElementById ('theme');
    const themeElement = document.getElementById ('tema');

    const savedColor = localStorage.getItem('backgroundColor');
    if(savedColor) {
        themeElement.style.background = savedColor;
        inputColor.value = savedColor;
    }

    inputColor.addEventListener('input', function() {
        const selectedColor = inputColor.value;
        themeElement.style.backgroundColor=selectedColor;

        localStorage.setItem('backgroundColor' , selectedColor);
    });
}
AlterarBackgroundColor();

const buttonBackgroundColor = () => {
    const buttonColor = document.querySelector('#info-button')
    const inputColor = document.getElementById ('theme');
    const backButton = document.querySelector('#option');


    inputColor.addEventListener('input', function() {
        const colorSelected = inputColor.value;
        buttonColor.style.backgroundColor=colorSelected;
        backButton.style.backgroundColor = colorSelected;
        localStorage.setItem('backgroundColor', colorSelected);
    })
    const savedBack = localStorage.getItem('backgroundColor')
    if(savedBack) {
    buttonColor.style.backgroundColor = savedBack;
    backButton.style.backgroundColor=savedBack;
};
}

buttonBackgroundColor();

const menuSuspenso = () => {

const infoButton = document.getElementById('info-button');
const dropDowm = document.querySelector('.dropdown');

infoButton.addEventListener('click', function(event) {
  this.parentNode.classList.toggle('active');
  event.stopPropagation();
    });

    document.addEventListener ('click', function(event){
        if(!dropDowm.contains(event.target)) {
            dropDowm.classList.remove('active');
        }
    })
}

menuSuspenso ();

const darkMode = () =>{
    const dark = document.getElementById('dark-mode');
    const body = document.body;
    const header = document.header;
    const footer = document.footer;


    dark.addEventListener('click' , function(){
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode'); 
    });
}

darkMode ();







