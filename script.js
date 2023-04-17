/*
1° Obtener el boton agregar tarea
2° Obtener el valor del input que el usuario escribio
3° Crear el evento para cuando el usuario haga click en el boton
4° Obtener el contenedor padre de la lista el ul
4° Crear el elemento <li class="list-group-item"></li>
5° Añadir ese elemento al contenedor padre
*/

const botonAgregarTarea = document.querySelector("#botonAgregarTarea");

botonAgregarTarea.addEventListener("click", (evento) =>{
    evento.preventDefault();
    
    const textoUsuario = document.querySelector("#inputTarea").value;

    const listElement = document.createElement("li");

    const inputCheckbox = document.createElement("input");
    //Lista de inputs de tipo checkbox
    const inputsCheckbox = document.getElementsByName("tarea");
    //Obteniendo ultimo valor value de los checkbox
    const ultimoValor = inputsCheckbox.length;

    inputCheckbox.setAttribute("type","checkbox");
    inputCheckbox.setAttribute("class","mx-1");
    inputCheckbox.setAttribute("name","tarea");
    inputCheckbox.setAttribute("value",`${ultimoValor + 1}`);



    //inputCheckbox.setAttribute("value","checkbox");

    listElement.classList.add("list-group-item","my-1");
    listElement.appendChild(inputCheckbox);
    
    //listElement.innerHTML = textoUsuario;
    // Lo de arriba borraba mi input checkbox
    //listElement.innerText = textoUsuario;
    listElement.appendChild(document.createTextNode(textoUsuario));
    let ulElement = document.querySelector("#ulElement");

    ulElement.appendChild(listElement);
    inputTexto = document.querySelector("#inputTarea");
    inputTexto.value = "";
});

const btnBorrarElemento = document.querySelector("#botonEliminarTarea");
btnBorrarElemento.addEventListener("click",() => {
    let ulElemento = document.querySelector("#ulElement");
    let liElementos = ulElemento.children;

    let inputsTipoCheckbox = document.getElementsByName("tarea");
    for(let i = 0; i < inputsTipoCheckbox.length; i++){

        if(inputsTipoCheckbox[i].checked){
            inputsTipoCheckbox[i].parentElement.remove();
            
        }
    }
});