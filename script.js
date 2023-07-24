const btnEncriptar = document.querySelector('[data-form-btn-do]')
const btnDesencriptar = document.querySelector('[data-form-btn-redo]')

const input = "Habia Una Vez Una Persona con muchos huevuis"
let resultado = input.toLowerCase();
console.log(resultado);

//Funciones
const encriptar = (evento) => {
    evento.preventDefault();
    resultado = resultado.replace(/u/g, "str");
    console.log(resultado);
}

const desencriptar = (evento) => {
    evento.preventDefault();
    resultado = resultado.replace(/str/g, "u");
    console.log(resultado);
}


btnEncriptar.addEventListener('click', encriptar)
btnDesencriptar.addEventListener('click', desencriptar)

