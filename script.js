let tabla = [
	{
		pais:"España", 
		red1:"Facebook", 
		red2:"Tuenti", 
		red3:"Youtube", 
		red4:"Hotmail", 
		red5:"Marca"
	},
	{
		pais:"Suiza", 
		red1:"Facebook", 
		red2:"Youtube", 
		red3:"Hotmail", 
		red4:"Google", 
		red5:"Blick"
	},
	{
		pais:"Portugal", 
		red1:"Facebook", 
		red2:"Youtube", 
		red3:"Hotmail", 
		red4:"Jogos", 
		red5:"Download"
	},
];

let crearTabla = function(lista){
	let stringTabla = "<tr><th>[País, Ranking]</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>";
	for (let elem of lista){
		let fila ="<tr> <td>"
		fila += elem.pais;
		fila += "</td>"

		fila += "<td>"
		fila += elem.red1;
		fila += "</td>"

		fila += "<td>"
		fila += elem.red2;
		fila += "</td>"

		fila += "<td>"
		fila += elem.red3;
		fila += "</td>"

		fila += "<td>"
		fila += elem.red4;
		fila += "</td>"

		fila += "<td>"
		fila += elem.red5;
		fila += "</td>"

		fila += "</tr>";

		stringTabla += fila;

		console.log(stringTabla);
	}
	return stringTabla;
};

document.getElementById("tabla").innerHTML = crearTabla(tabla);
