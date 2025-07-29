//document.querySelector('h1').innerHTML = ('Juego del Número Secreto');
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del Número Secreto';

//document.querySelector('p').innerHTML = ('Indica un número del 1 al 10');
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);     
    
    if (numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {       
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto)
        {
           asignarTextoElemento('p','El número secreto es menor'); 
        }
        else
        {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() 
{
    document.querySelector('#valorUsuario').value = '';
}    

function generarNumeroSecreto() 
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p',`Ya se sortearon todos los números posibles`);
    }
    else
    {
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }

}

function condicionesIniciales() 
{
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();   
    intentos = 1;
}

function reiniciarJuego() 
{
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatrorio
    //inicializar el número de intentos
    condicionesIniciales();
    
    //deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');      
}


condicionesIniciales();



