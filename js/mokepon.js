
    const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
   const sectionReiniciar = document.getElementById('reiniciar')
   const botonMascotaJugador = document.getElementById('boton-mascota')
    const botonTierra = document.getElementById('boton-tierra')
    const botonFuego = document.getElementById('boton-fuego')
    const botonReiniciar = document.getElementById('boton-reiniciar')
    const botonAgua = document.getElementById('boton-agua')
    const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
     const inputHipodoge = document.getElementById('hipodoge')
     const inputcapipepo = document.getElementById('capipepo')
     const inputratigueya = document.getElementById('ratigueya')
     const spanMascotaJugador = document.getElementById('mascota-jugador')
     const  spanMascotaEnemigo = document.getElementById('mascota-enemiga')
     const spanVidasJugador = document.getElementById('vidas-jugador')
     const spanVidasEnemigo = document.getElementById('vidas-enemigo')
     const sectionMensajes = document.getElementById('resultado')
    const ataquesDelJugador = document.getElementById('ataques-Del-Jugador')
     const ataquesDelEnemigo = document.getElementById('ataques-Del-Enemigo')

let ataqueJugador
let ataqueEnemigo

let vidasJugador=3
let vidasEnemigo=3



function iniciarJuego() {
   
    sectionSeleccionarAtaque.style.display = 'none'

    sectionReiniciar.style.display = 'none'

}
// funcion para escoger mascota se crean 3 variables para almacenar los nombres de las mascotas y una para el span mascota-jugador

// 1.0 se crea esta funcion para seleccionar mascosta
function seleccionarMascotaJugador() {
 
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'hipodoge'

    } else if(inputcapipepo.checked) {

        spanMascotaJugador.innerHTML = 'capipepo'

    } else if (inputratigueya.checked) {

        spanMascotaJugador.innerHTML = 'ratigueya'
    } else{

        alert('SELECCIONA A TU MASCOTA!')
    }

    seleccionarMascotaEnemigo()
}

// 1.1 se selecciona mascota del enemigo de manera automatica
function seleccionarMascotaEnemigo () {

    let mascotaAleatorio = aleatorio(1,3)
 
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}

function reiniciarJuego() {

    location.reload()
}

//1.2 se crea la funcion aleatorio para la funcion seleccionarMascotaEnemigo
function aleatorio (min, max) {

return Math.floor(Math.random() * (max - min +1) + min)

 }

 //1.3 funcion para el ataque fuego
 function ataqueFuego() {

    ataqueJugador = 'FUEGO'
    ataqueEnemigoAleatorio()
 }

 //1.4 funcion para el ataque agua
 function ataqueAgua() {

    ataqueJugador = 'AGUA'
    ataqueEnemigoAleatorio()
 }

 
 //1.5 funcion para el ataque Tierra

function ataqueTierra() {
ataqueJugador = 'TIERRA'
ataqueEnemigoAleatorio()

 }
//1.6 ataque enemigo aleatorio

 function ataqueEnemigoAleatorio() {

    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {

        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {

        ataqueEnemigo = 'AGUA'
    } else {

        ataqueEnemigo= 'TIERRA'
    }
//1.8 pasamos la funcion al  ataqueEnemigoAleatorio para mostrar mensaje
   batalla()
 }

 // 3.0 funcion de batalla

 function batalla() {
    // 4.0 creamos dos variables para las vidas del user y enemigo

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE");
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" || ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"  || ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE");
        // 3.1 restamos las vidas del enemigo
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE");
// 3.1 restamos las vidas del jugador
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
   
 }

 // 5.0 revisar vidas
 function revisarVidas(){
    if (vidasEnemigo == 0){
        alert("GANASTE")
// 6.1 pasar la funcion deshabilitar para cuando gane o pierda deshabilite botones
        deshabilitar() 
    }else if (vidasJugador == 0){
        alert("PERDISTE")
        deshabilitar() 
    }

  }


//1.7 creamos la funcion crear mensaje para mostrar el proceso en el html

// se crea un parametro para la funcion batalla
 function crearMensaje(resultado) {
   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML= ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    // let parrafo = document.createElement('p')

    // parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador +  ' la mascota del enemigo ataco con ' + ataqueEnemigo + ' tu ' + resultado


    ataquesDelJugador.appendChild( nuevoAtaqueDelJugador)
    ataquesDelEnemigo .appendChild(nuevoAtaqueDelEnemigo)

 }

// 6.0  deshabilitar botones
 function deshabilitar() {

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'

 }

 iniciarJuego() 
    

// 2.0 se crea esta variable para llamar el boton del html y el addevent para pasarle la funcion al boton

botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

// 2.1 botones de ataque

botonFuego.addEventListener('click',ataqueFuego)

botonAgua.addEventListener('click',ataqueAgua)

botonTierra.addEventListener('click',ataqueTierra) 

botonReiniciar.addEventListener('click', reiniciarJuego)



