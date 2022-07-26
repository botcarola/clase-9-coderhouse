

// puedo acceder a todos los formularios

console.log(document.forms)

const cuadrado = document.querySelector(".cuadrado-rojo")
console.log(cuadrado)

// EVENTO click, se puede realizar en cualquier elemento html

// 1) forma de generar eventos

// cuadrado.onmouseover = () => {
//     console.log("me están clickendo")
//     cuadrado.classList.toggle("cuadrado-azul")
// } 

const parrafo = document.querySelector("p")
const botonVerMas = document.querySelector("#verMas")

// 2) addEventListener()

botonVerMas.addEventListener("click", () => {
    parrafo.classList.toggle("ver")

    if (parrafo.classList.contains("ver")){
        botonVerMas.textContent = "Cerrar"
    } else {
        botonVerMas.textContent = "Ver más"
    }
})


// eventos de mouse

//  click
//mousedown/mouseup ---> escucha todo tipo de clicks
//mouseover/mouseout
//mousemove (epilepsia)


cuadrado.onmousemove = () => {
    console.log("me están clickendo")
    cuadrado.classList.toggle("cuadrado-azul")
}

// generar objetos desde un formulario

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#campo-nombre")
const inputApellido = document.querySelector("#campo-apellido")
const inputEdad = document.querySelector("#campo-edad")
const inputEmail = document.querySelector("#campo-email")
const submit = document.querySelector("#submit")

console.log(formulario, inputNombre, inputApellido, inputEdad, inputEmail)

const clientes = []

class Cliente {
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new Cliente(inputNombre.value, inputApellido.value, inputEdad.value, inputEmail.value))
    console.log(clientes)
}

// console.log(clientes) ...> el mensaje en consola no va a mostrar las modificaciones al array a menos que esté dentro del bloque de las instrucciones que modifica a dicho elemento

// oninput escucha cada uno de los cambios del input

// inputNombre.oninput = () => {  
//     console.log(inputNombre.value)
//     if (inputNombre.value.length <= 2){
//         console.log("ERRORRRR tu nombre es muy corto")
//         inputNombre.style.border = "4px solid red"
//     } else {
//         console.log("tu nombre estábien ah")
//         inputNombre.style.border = "4px solid green"
//     }
// }

// onchange escucha cuando se termina de ingresar datos

inputNombre.onchange = () => {  
    console.log(inputNombre.value)
    if (inputNombre.value.length <= 2){
        console.log("ERRORRRR tu nombre es muy corto")
        inputNombre.style.border = "4px solid red"
        submit.disabled = true
    } else {
        console.log("tu nombre estábien ah")
        inputNombre.style.border = "4px solid green"
        submit.disabled = false
    }
}