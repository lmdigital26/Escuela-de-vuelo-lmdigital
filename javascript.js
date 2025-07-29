// JavaScript 
var imagenes = ['IMG/avion1.jpg' , 'IMG/habitacion.cp.jpg', 'IMG/bar.cp.jpg','IMG/Avión2. pp.jpg','IMG/imagen5.jpg', 'IMG/imagen6.jpg','IMG/imagen7.jpg',],
  cont = 0;
function carrusel(contenido){
	contenido.addEventListener('click', e => {
		let atras = contenido.querySelector('.atras'),
		adelante = contenido.querySelector('.adelante'),
		img = contenido.querySelector('img'),
			tgt = e.target;
		
		
		if(tgt == atras){
			if(cont > 0){			  
				img.src = imagenes[cont  -1];
				cont--; 
			
			} else { img.src = imagenes[imagenes.length - 1 ];
 cont = imagenes.length - 1;}	 
} else if(tgt == adelante){
				if(cont < imagenes.length - 1){			  
					img.src = imagenes[cont + 1];
					cont++; }			   else {img.src = imagenes[0]; cont = 0;			  
												
												}} });}


document.addEventListener("DOMContentLoaded",()=> {
	let contenido = document.querySelector('.contenido');
	carrusel(contenido);
	
});





