(function(){
	
	var
		flag = 0, espera, pos, limpiar, stop, parejas=0,
		talbero = document.getElementsByClassName("cajas"),
		lista = [1,2,3,4,5,6,1,2,3,4,5,6];


	lista = lista.sort(function() {return Math.random() - 0.5});
	
	lista.forEach(function (val, index, theArray) {
	  var image = document.createElement("img");
		image.setAttribute('src', 'img/'+ val + '.png');
		image.setAttribute('carta', val);
		image.setAttribute('pos', index);
		talbero[index].appendChild(image);
		image.addEventListener("click", getCarta , false);
		
	});

	function getCarta(){
		if (limpiar){
			espera.classList.remove('hide');
			stop.classList.remove('hide');
			limpiar = false;
		}

		if( flag == 0 ){
			flag = this.getAttribute("carta");
			pos = this.getAttribute("pos");
			this.classList.add('hide');
			espera = this;
		} 

		else if( flag == this.getAttribute("carta") && pos != this.getAttribute("pos") ){
			this.classList.add('hide');
			//espera.classList.add('hide');
			flag = 0;
			parejas++;
		} 

		else{
			stop = this;
			this.classList.add('hide');
			pos = this.getAttribute("pos");
			flag = 0;
			console.log("Segundo");
			limpiar = true;
		}

		if ( parejas == 6 ) {
			alert("Has ganado");
			location.reload();
		};
	}
})(document);