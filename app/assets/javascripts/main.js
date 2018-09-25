var rec = "stop";
var estado = 0;
var listaPuntos = ["../grafs/PuntoA.png","../grafs/PuntoB.png","../grafs/PuntoC.png"];

window.addEventListener("resize", ajustarFontSize);

function cambiarEstado(n){
	estado = n;
}
// Detecta si se cambió el ancho de la ventana del navegador y ajusta el tamaño de la fuente
// de los "inputs" que reciben los datos del aspirante. (responsive)
function ajustarFontSize(){
	if (estado == 1) {
		var t = parseInt(document.body.clientWidth);
		var ent1 = document.getElementById("input1");
		var ent2 = document.getElementById("input2");
		if (t >= 900) {
			ent1.style.fontSize = "18px";
			ent2.style.fontSize = "18px";
		}else if (t >= 800 && t < 900){
			ent1.style.fontSize = "16px";
			ent2.style.fontSize = "16px";
		}else if (t >= 700 && t < 800){
			ent1.style.fontSize = "14px";
			ent2.style.fontSize = "14px";
		}else if (t >= 550 && t < 700){
			ent1.style.fontSize = "12px";
			ent2.style.fontSize = "12px";
		}else if (t > 550){
			ent1.style.fontSize = "10px";
			ent2.style.fontSize = "10px";
		};
	};	
}

function avanzar(ejercicio){
	debugger
	url = document.URL + '?ejercicio=' + ejercicio
	document.location.replace(url);
}

var estud = [];
function registrarUsuario(url){
	var nom = document.getElementById("input1");
	var cod = document.getElementById("input2");
	if (nom.value == "") {
		alert("Antes de comenzar el examen debe ingresar su nombre completo.")
	}else if (cod.value == "") {
		alert("Antes de comenzar el examen debe ingresar su código de aspirante.")
	}else{
		estud.push(nom.value);
		estud.push(cod.value);
		document.location.replace(url);
	};
}
// Función para tocar un archivo de audio solicitado.
function tocaAudio(a) {
	if (rec == "stop") {
		console.log("dato archivo: " + a);
		document.getElementById("play").src = "../grafs/play2.png";
		audioElement = document.getElementById("fileInterv");
		audioElement.pause(); // detiene el sonido
		audioElement.src = a; // carga el archivo
		audioElement.currentTime = 0; // rebobina el sonido
		audioElement.play(); // toca el archivo
	};
}

function iluminar(obj, luz){
	document.getElementById(obj).style.opacity = luz;
}

// Función para avanzar el marcador de puntos al siguiente ejercicio
function sumaUno(item, lista){
	lista[item] += 1;
	//lista[item + 1] += 1;
	console.log("Lista = " + lista);
	// Actualiza gráfica decontador visual de puntos
	for (var i = 0; i < lista.length; i++) {
		document.getElementById("p" + i).src = listaPuntos[lista[i]];
	};
}

function grabar(){
	if (rec == "stop") {
		rec = "grabando";
		document.getElementById("grab").src = "../grafs/Grabando2.png"
		document.getElementById("btn1").style.display = 'none';
		inicarGrabacion();
	} else{
		if (marcaEjercicio[index] < 2) {
			marcaEjercicio[index] = 2;
			document.getElementById("p" + index).src = listaPuntos[2];
		};
		rec = "stop";
		document.getElementById("grab").src = "../grafs/Grabando1.png"
		document.getElementById("btn1").style.display = 'block';
		detenerGrabacion();
	};
}


