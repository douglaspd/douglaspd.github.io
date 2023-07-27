
const AlterarBackgroundColor = () =>{

    const inputColor = document.getElementById ('theme');
    const themeElement = document.getElementById ('tema');

    inputColor.addEventListener('input', function() {
        const selectedColor = inputColor.value;
        themeElement.style.backgroundColor=selectedColor;
    });
}
AlterarBackgroundColor();

const buttonBackgroundColor = () => {
    const buttonColor = document.querySelector('#info-button')
    const inputColor = document.getElementById ('theme');
    const backButton = document.querySelector('#option');

    inputColor.addEventListener('input', function() {
        const selectedColor = inputColor.value;
        buttonColor.style.backgroundColor=selectedColor;
        backButton.style.backgroundColor = selectedColor;
    })

}
buttonBackgroundColor();

const menuSuspenso = () => {

const infoButton = document.getElementById('info-button');
const dropDowm = document.querySelector('.dropDown');

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


