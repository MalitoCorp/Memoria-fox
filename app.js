(function () {
    
    var flag = 0;
    var Carta1, carta2;
    var pos;
    var limpiar;
    var talbero = document.getElementById("tablero");
    var	lista = [1, 2, 3, 4];
    var parejas = lista.length;

    // Duplico y revuelvo la lista para preparar el juego.
    lista = lista.concat(lista);
	lista = lista.sort(function () { return Math.random() - 0.5; });
    
    // Creo los contenedores para cada una de las cartas.
    lista.forEach(function () {
        var carta = document.createElement("div");
        talbero.appendChild(carta);
    });
    var cartas = talbero.getElementsByTagName("div");
    
    // Creo los Elementos para las imagenes y las agrego a su contenedor.
	lista.forEach(function (val, index) {
        var image = document.createElement("img");
        image.setAttribute('src', 'img/'+ val + '.png');
        image.dataset.carta = val;
        image.dataset.pos = index;
        cartas[index].appendChild(image);
        
        //Asigno el evento click a cada carta y evaluo el juego.
        image.addEventListener("click", getCarta , false);
	});

	function getCarta (element){
            
        var self = element.target;
        
        // Si las cartas no coinciden se ocultan de nuevo.
		if (limpiar){
			Carta1.classList.remove('show');
			Carta2.classList.remove('show');
			limpiar = false;
		}

        // Si es el primer tiro se almacenan 
        // los datos de la carta seleccionada.
		if( flag == 0 ){
			flag = self.dataset.carta;
			pos = self.dataset.pos;
			self.classList.add('show');
			Carta1 = this;
		} 

        // En el segundo tiro se compara si las cartas son iguales
        // y se actua en consecuencia, restado en uno a la lista de parejas.
		else if( flag == self.dataset.carta && pos != self.dataset.pos ){
			self.classList.add('show');
			flag = 0;
			parejas--;
		} 

        // En caso de que las cartas no caincidan se dejan
        // destapadas hasta el siguiente tiro.
		else{
			Carta2 = self;
			self.classList.add('show');
			flag = 0;
			limpiar = true;
		}

        // Si el finarizar la juganda se completa 
        // todas las parejas se gana el juego.
		if ( parejas == 0 ) {
			alert("¡Felicidades ganaste!");
			location.reload();
		};
	}
})(document);
