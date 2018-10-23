function crear_tabla(){
    var Tabla ="<table id='tblucles'> <caption></caption>"; 
    
        Tabla +="<tr><th>Números</th>"; //título de la fila
    
//Bucle for números
for (var j = 1; j <= 10 ; j++) {
Tabla +='<td>'+ j + '</td>';
}
    
        Tabla +="</tr><tr ><th>Números al cuadradado</th>"; //título de la fila 
    
//Bucle while números al cuadrado
var t =1;
while (t < 11){
Tabla +='<td>'+Math.pow(t,2)+ '</td>';
t++;
}

        Tabla +="</tr><tr ><th>Números al cubo</th>"; //título de la fila
    
//Bucle do while números al cubo
var s =1;
do{
        Tabla +='<td>' +Math.pow(s,3) + '</td>';
++s;
}while (s < 11)

        Tabla+="</tr></table>";//final tabla
    
        document.getElementById("table").innerHTML = Tabla;
}
window.addEventListener('load', crear_tabla, false); //para que cargue la tabla al cargar la pag
