// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []

//Tarea1: función para agregar los amigos (usa el get element...)

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo !== '') {
       
        amigos.push(nombreAmigo);
       
        document.getElementById('amigo').value = '';
        
        actualizarListaAmigos();
    } else {
       
        alert('Por favor, inserte un nombre');
    }
}

//Explicación primera parte.
//function agregarAmigo() (define la función que se ejecutará cuando se haga clic en el botón "Añadir" en el juego html) (lo vincula al index html "button class="button-add" onclick="agregarAmigo()">Añadir</button>")
//const nombreAmigo = document.getElementById('amigo').value.trim(); (captura el texto ingresado en el campo de entrada (value) y elimina espacios en blanco al inicio y al final (trim).) (la relación con el index html: <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">)
//if (nombreAmigo !== '') (Verifica si el nombre ingresado no está vacío.)
//amigos.push(nombreAmigo) (Agrega el nombre al array amigos, por eso hice el "let amigos []" primero ) (!== ''    esto significa si esto no es igual a vacío ( entonces se hará lo que está en {} ))
//document.getElementById('amigo').value = '';  (Limpia el campo de texto después de agregar el nombre (Relación con index HTML: Mismo input de antes : <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">)
// actualizarListaAmigos(); (Llama a una función (function actualizarListaAmigos() que viene a continuación en otro chunck) para actualizar la lista visual de amigos.) (relación con el index html:actualiza <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul> )
//} else { alert('Por favor, inserte un nombre') (si el nombre está vacío, muestra la alerta 'Por favor, inserte un nombre')



function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Explicación segunda parte
// Con esta lista la idea es que cada vez que se ingrese un nuevo amigo, se borre la lista, se reconstruya con el nuevo amigo recientemente añadido y se muestre su actualización.
//function actualizarListaAmigos() {.... (Define la función que actualiza la lista visual de amigos.)
//const listaAmigos = document.getElementById('listaAmigos'); (Obtiene el elemento <ul> del HTML donde se mostrarán los amigos.) (relación con el index html : <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>)
//listaAmigos.innerHTML = '' (Limpia el contenido actual de la lista para evitar duplicados.)
//amigos.forEach(amigo => {.....  (Itera sobre cada amigo en el array amigos)
// const li = document.createElement('li'); (Crea un nuevo elemento <li> para cada amigo)
// li.textContent = amigo; (Establece el texto del <li> como el nombre del amigo)
// listaAmigos.appendChild(li); ( Añade el nuevo <li> a la lista <ul> en el HTML)



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Primero debes ingresar a tus amigos.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>Felicitaciones!, el amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}



//función sortearAmigo
//OBS, hay ue veruficar que hayan amigos en la lista
//function sortearAmigo() { (Esta función se ejecuta cuando se hace clic en el botón de sortear.) (relación con index html:  <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">)
//if (amigos.length === 0) {alert("No hay amigos para sortear. Primero debes ingresar a tus amigos.");    return;}  (Verifica si hay amigos en la lista. Si no hay amigos, muestra una alerta y termina la función.No tiene relación directa con el HTML, pero previene errores si la lista está vacía.)
//const indiceAleatorio = Math.floor(Math.random() * amigos.length); (Genera un número aleatorio entre 0 y el número de amigos en la lista. No tiene relación directa con el HTML) (el término const proviene de "constante", lo que sugiere que el valor asignado a una variable declarada con const no debe cambiar. )
// const amigoSorteado = amigos[indiceAleatorio]; (Selecciona un amigo al azar de la lista. No tiene relación directa con el HTML.)
//const resultadoElement = document.getElementById('resultado'); (Obtiene el elemento del HTML donde se mostrará el resultado.) (relación con el index html : <ul id="resultado" class="result-list" aria-live="polite"></ul>)
//resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`; (Actualiza el contenido del elemento 'resultado' con el nombre del amigo sorteado) Muestra el resultado en la página web.