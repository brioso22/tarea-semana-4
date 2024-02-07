
// Eventos Click 
const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');
const click3 = document.getElementById('click3');

click1.addEventListener('click', function () {
    alert('hola usuario, ¡Haz hecho click en el ejemplo de click!');
    console.log("ponganos buena nota :3");
});

click2.addEventListener('click', function () {
    this.style.backgroundColor= 'red';
});
click3.addEventListener('click',function(){
this.style.display = 'none'

})


// Mouse Over Example
const mouse1 = document.getElementById('mouseover1');
const mouse2 = document.getElementById('mouseover2');
const mouse3 = document.getElementById('mouseover3');

mouse1.addEventListener('mouseover', function () {
    window.alert("esta es una alerta al mover el mouse serca del cuadro")
});
mouse2.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightgreen';
});

mouse3.addEventListener('mouseover', function () {
    mouse3.style.cursor = 'pointer'
});

// Focus Example
const focusInput = document.getElementById('focus1');
const focusExample = document.getElementById('focus2');

const focusInput2 = document.getElementById('focus1-2');
const focusExample2 = document.getElementById('focus2-2');

const focusInput3 = document.getElementById('focus1-3');
const focusExample3 = document.getElementById('focus2-3');


focusInput.addEventListener('focus', function () {
    focusExample.innerHTML += '<p>¡El campo de entrada está enfocado!</p>';
});

focusInput2.addEventListener('focus', function () {
    focusExample2.style.backgroundColor = "gray";
});

focusInput3.addEventListener('focus', function () {
    focusExample3.style.color ="red";
});
