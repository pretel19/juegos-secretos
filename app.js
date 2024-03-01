

let numeroSecreto=generarNumeroSecreto();
let intentos=1;
let numeroMaximo=10;
let listaNumerosSecretos=[];

function intentoDeUsuario(){
    //console.log(intentos);//para ver el numero en la consola
    let numeroDeUsuario=document.getElementById('valorUsuario').value; // conexion con el html
    if (numeroDeUsuario==numeroSecreto){
        asignarTextElemento('p',`acertaste el numero en ${intentos} ${intentos==1?'vez' :'veces'}`) //usamos otro tipode condicional ?=if y :=else
        document.getElementById('reiniciar').removeAttribute('disabled')
        
    }else{
        //el usuario no acerto
        if(numeroDeUsuario>numeroSecreto)
        {asignarTextElemento('p','numero secreto es menor')}
        else{
            asignarTextElemento('p','numero secreto es mayor') ;

        }
        intentos++;
        limpiarCaja();
        
    }


    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value=''

}

function generarNumeroSecreto() {
    
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(listaNumerosSecretosSecretos);
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros
    if(listaNumerosSecretos.length==numeroMaximo){
        asignarTextElemento('p','se sortearon todos los numeros');
    }else{
    //si el numero esta en la lista creamos otro

    if(listaNumerosSecretos.includes(numeroGenerado)){ //includes verifica si el valor esta en la lista
        return generarNumeroSecreto();

    }else{
        listaNumerosSecretos.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function asignarTextElemento(elemento,texto){
    let elemtoHTML = document.querySelector(elemento); //conexion con html
    elemtoHTML.innerHTML= texto;
    return;
}



function condicionesIniciales(){
    asignarTextElemento('h1','juego del numero!');
    asignarTextElemento('p',`indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();

    //generar el numero aleatorio
    //desabilitar el boton
    //inicializar intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true') //el # es por que reiniciar es un id
}
condicionesIniciales();




