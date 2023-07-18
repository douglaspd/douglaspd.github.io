
const AlterarBackgroundColor = () =>{

    const inputColor = document.getElementById ('theme');
    const themeElement = document.getElementById ('tema');

    inputColor.addEventListener('input', function() {
        const selectedColor = inputColor.value;
        themeElement.style.backgroundColor=selectedColor;
    });
}
AlterarBackgroundColor();

