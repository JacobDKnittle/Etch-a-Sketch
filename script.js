const container = document.querySelector('.container');
const sizeButton = document.querySelector('.sizeButton');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'gray';
    })
    container.appendChild(square);
}

sizeButton.addEventListener('click', () => {
    container.textContent = '';
    let size = 0;
    do {
        size = prompt('Choose your dimensions for the etch a sketch: ');
    } while(size > 100)

    for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = `calc(100% / ${size})`
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'gray';
    })
    container.appendChild(square);
}
})