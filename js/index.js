const spanText = document.getElementById('spanText')
const buttonPresentar = document.getElementById('buttonPresentar')
let personaje
let personajeMostrado
let guardarPersonaje

//Cambia el texto de la Presentación según en personaje seleccionado
function mostrarPresentacion(nombre){
    switch (nombre) {
        case 'mario':
            spanText.textContent= "Mario"
            break;
        case 'luigi':
            spanText.textContent= "Luigi"
            break;
        case 'bowser' || 'Bowser':
            spanText.textContent="Bowser Morton Koopa"
            break;
        case 'peach' || 'Peach':
            spanText.textContent="Princesa Peach Toadstool"
            break;
        case 'yoshi' || 'Yoshi':
            spanText.textContent="T. Yoshisaur Munchakoopas"
            break;
        case 'toad' || 'Toad':
            spanText.textContent="Toad"
            break;
        case 'toadette' || 'Toadette':
            spanText.textContent="Toadette"
            break;
        case 'daisy' || 'Daisy':
            spanText.textContent="Princesa Daisy"
            break; 
        personajeMostrado = nombre
        console.log(personajeMostrado)
    } 
}


//Muestra el personaje elegido mediante Prompt
function elegirPersonaje(){
    if(buttonPresentar.classList.contains('buttonInactivo')){
    buttonPresentar.classList.remove('buttonInactivo')
    buttonPresentar.classList.add('buttonActivo')

    }
    else{
        buttonPresentar.classList.remove('buttonActivo')
        buttonPresentar.classList.add('buttonInactivo')
    }
    
    personaje = prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)')

    if(personajeMostrado != null && personaje != personajeMostrado){
        document.getElementById(personajeMostrado).removeAttribute('title',"Presentado" )
    }
    
    mostrarPresentacion(personaje.toLocaleLowerCase())

    if(document.getElementById(personaje.toLocaleLowerCase()) != null 
        || document.getElementById(personaje.toLocaleLowerCase()) != ""){
        guardarPersonaje = personaje.toLocaleLowerCase()
        personajeMostrado = personaje.toLocaleLowerCase()
        console.log(guardarPersonaje)
        document.getElementById(guardarPersonaje).setAttribute('title',"Presentado" )
    }
    else{
        alert("Personaje no encontrado")
    }

}


//Muestra el personaje clickeado
let personajeActivo = "";
function mostrarPersonaje(nombrePersonaje){
    
    mostrarPresentacion(nombrePersonaje)

    if(personajeActivo != "" && nombrePersonaje != personajeActivo){
        document.getElementById(personajeActivo).removeAttribute('title',"Presentado" )
    }

    let divPersonaje= document.getElementById(nombrePersonaje)
    personajeActivo=nombrePersonaje

    if(divPersonaje.getAttribute('title')=="Presentado"){
        divPersonaje.removeAttribute('title',"Presentado") 
        spanText.textContent= ""
    }
    else{
        divPersonaje.setAttribute('title',"Presentado" )
    }  
}














