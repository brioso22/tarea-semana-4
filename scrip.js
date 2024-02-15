
// Eventos Click 
const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');
const click3 = document.getElementById('click3');
var contador = 0;

click1.addEventListener('click', function () {
    contador++;
    click1.innerText = " activar un contador =" + contador;
});


click2.addEventListener('click', function () {
    this.style.width = '300px';
    this.style.height = '100px';
});
click3.addEventListener('click',function(){
    this.style.textDecoration ="line-through";

})


// Mouse Over Example
const mouse1 = document.getElementById('mouseover1');
const mouse2 = document.getElementById('mouseover2');
const mouse3 = document.getElementById('mouseover3');

mouse1.addEventListener('mouseover', function () {
    // Hacer el elemento redondo
    this.style.borderRadius = '50%';
});

mouse2.addEventListener('mouseover', function () {
    // Hacer el fondo negro con texto blanco
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
});

mouse3.addEventListener('mouseover', function () {
    // Aumentar el tamaño del elemento
    this.style.width = '150px';
    this.style.height = '150px';
});


// Focus Example
const focusInput = document.getElementById('focus1');
const focusExample = document.getElementById('focus2');

const focusInput2 = document.getElementById('focus1-2');
const focusExample2 = document.getElementById('focus2-2');

const focusInput3 = document.getElementById('focus1-3');
const focusExample3 = document.getElementById('focus2-3');

focusInput.addEventListener('focus', function () {
    focusExample.style.fontStyle = 'italic';
})

focusInput2.addEventListener('focus', function () {   
    focusExample2.style.backgroundColor = 'lightblue';
})
focusInput3.addEventListener('focus', function () {   
    focusExample3.style.color = 'transparent';
})

