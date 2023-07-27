const btnEncriptar = document.querySelector('[data-form-btn-do]');
const btnDesencriptar = document.querySelector('[data-form-btn-redo]');
const btnCopiar = document.querySelector('[data-form-btn-copy]')
const parrafo = document.querySelector('[data-text]');
const input = document.querySelector('[data-form-input]');

let vacio = document.getElementById('respuesta--vacio');
let resultado = '';
console.log(resultado);
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
//Funciones
const encriptar = (evento) => {
    evento.preventDefault();
    function encriptarTexto(texto) { 
        texto = texto.replace(/e/gi, "enter");
        texto = texto.replace(/i/gi, "imes");
        texto = texto.replace(/a/gi, "ai");
        texto = texto.replace(/o/gi, "ober");
        texto = texto.replace(/u/gi, "ufat");

        return texto;
    }


    resultado = encriptarTexto(input.value);
    
    if (resultado == '') {
        vacio.style.display = "initial";
        parrafo.style.height = 'auto'
        btnCopiar.style.display = "none";
        parrafo.innerHTML =  "Ingresa el texto que desees encriptar o desencriptar.";
    } else {
        parrafo.innerHTML =  resultado;
        vacio.style.display = "none";
        parrafo.style.height = '80%'
        btnCopiar.style.display = "initial";
        console.log(resultado);    
    }

};

const desencriptar = (evento) => {
    evento.preventDefault();

    function desEncriptarTexto(texto) { 
        texto = texto.replace(/enter/gi, "e");
        texto = texto.replace(/imes/gi, "i");
        texto = texto.replace(/ai/gi, "a");
        texto = texto.replace(/ober/gi, "o");
        texto = texto.replace(/ufat/gi, "u");

        return texto;
    };

    resultado = desEncriptarTexto(input.value);

    
    if (resultado == '') {
        vacio.style.display = "initial";
        btnCopiar.style.display = "none";
        parrafo.style.height = 'auto'
        parrafo.innerHTML =  "Ingresa el texto que desees encriptar o desencriptar.";
    } else {
        parrafo.innerHTML =  resultado;
        parrafo.style.height = '80%'
        vacio.style.display = "none";
        btnCopiar.style.display = "initial";
        console.log(resultado);    
    }
}

function copyToClipboard() {
    var textoACopiar = parrafo.innerText;
  
    navigator.clipboard.writeText(textoACopiar)
      .then(function() {
        console.log('Texto copiado!.');
        let sombraOriginal = btnCopiar.style.boxShadow;
        let textoOriginal = btnCopiar.innerText;
        let bordeOriginal = btnCopiar.style.border;
        let colorTxtOriginal = btnCopiar.style.color;
        btnCopiar.style.boxShadow = '0 0px 16px 0 rgba(38, 255, 26, 0.533), 0 6px 20px 0 rgba(75, 255, 55, 0.089), inset 0 0 15px #4bff5d20';
        btnCopiar.innerHTML = 'Copiado!';
        btnCopiar.style.border = '1px solid #00AC56';
        btnCopiar.style.color = '#00AC56'
        
        setTimeout(function() {
            btnCopiar.innerText = textoOriginal;
            btnCopiar.style.boxShadow = sombraOriginal;
            btnCopiar.style.border = bordeOriginal;
            btnCopiar.style.color = colorTxtOriginal;
          }, 2000); // 2000 millisegundos (2 seconds)

      })
      .catch(function(err) {
        console.error('No se pudo copiar el texto.', err);
      });
  }


  


btnEncriptar.addEventListener('click', encriptar)
btnDesencriptar.addEventListener('click', desencriptar)
btnCopiar.addEventListener('click', copyToClipboard)
