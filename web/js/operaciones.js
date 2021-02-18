//Temperatura
function realizarConversion(tipoConversion) {
    var a = parseFloat(document.getElementById("txtN1").value);
    //Aqui guardamos el valor del resultado
    c = 0;

    switch (tipoConversion) {
        case 1:
            c = fahrenheit(a);
            break;
        case 2:
            c = kelvin(a);
            break;
    }
    //Colocamos el resultado dentro de la caja de texto
    document.getElementById("txtResultado").value = c;
}
function fahrenheit(n1) {

    var r = (n1*1.8)+32;
    return r;
}
function kelvin(n1) {

    var r = n1 +273.15;
    return r;
}

//Longitud
function coversionLongitud(longitud)
{
    var a = parseFloat(document.getElementById("txtNumero").value);
     b = 0;

switch (longitud)
{
    case 1:
        b = pulgada(a);
        break;
    case 2:
        b = pie(a);
        break;
    case 3:
        b = yarda(a);
        break;
    case 4:
        b = milla(a);
        break;

}
//colocamos el resultado dentro de la caja de texto
document.getElementById("txtResultado1").value = b;


function pulgada(n1)
{
    var n2 = n1/2.54;
    return n2;
}

function pie(n1)
{
    var n2 = n1 / 30.48;
    return n2;
}
function yarda(n1)
{
    var n2 = n1 / 91.44;
    return n2;
}
function milla(n1)
{
    var n2 = n1 / 160934;
    
    return n2;
}
}

//Divisas
function coversionDivisa(divisa)
{
    var a = parseFloat(document.getElementById("txtDivisa").value);
    var b = 0;

switch (divisa)
{
    case 1:
        b = dolarEstadounidense(a);
        break;
    case 2:
        b = dolarCanadiense(a);
        break;
    case 3:
        b = euro(a);
        break;
    case 4:
        b = pesoChileno(a);
        break;
    case 5:
        b = rupia(a);
        break;
}
//colocamos el resultado dentro de la caja de texto
document.getElementById("txtResultadoDivisas").value = b;


function dolarEstadounidense(n1)
{
    var d = n1/24.04;
    return d;
}

function dolarCanadiense(n1)
{
    var d = n1 / 17.24;
    return d;
}
function euro(n1)
{
    var d = n1 / 26.2 ;
    return d;
}
function pesoChileno(n1)
{
    var d = n1 / 0.028; 
    return d;
}
function rupia(n1)
{
    var d = n1 / 0.32;
    return d;
}
}

/*Considera que la salida será desplegada en un elemento HTML de tipo párrafo 
 *(<p></p>) con identificador "parrafoRespuesta". Así mismo, pon atención en como se despliega la salida en el ejemplo, 
 * para que tu código lo haga de esa forma.Lector inmersivo*/

/*unction ()
12.El factorial de un número se calcula mediante la siguiente fórmula:
N! = 1 * 2 * 3 * ... * N

Por ejemplo, el factorial de 5 se calcularía de la siguiente forma:
5! = 1 * 2 * 3 * 4 * 5 = 120

Un ingeniero egresado de cierta Universidad, ha escrito el siguiente código en JavaScript para calcular el factorial de un número:*/

function calcularFactorial()
{
     var n = 5;
     var factorial = 1;
     for (var i =0; i < n; i++)
     {
         factorial = factorial * i;
     }
     //return factorial;
     
     alert("El factorial de " +n + " es: " + factorial);
 }

document.getElementById("Factorial").value = n;



/*
//factorial
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}*/
                                            
/*function numPar(n){
    var num=parseFloat(n).value;
    var text="";
    for(var i=0; i<=n; i++){
        if (!(i%2)||i==n){
            text=text+" "+i;
        }else{}
        
        }
        document.getElementById("parrafoRespuesta").innerHTML=text;
    }*/
                                            
function numeroPar() {
    var n = document.getElementById("n").value;
    var text = "";

    for(var i=0; i<=n; i=i+2){
        if((i%2)==0){
            text=text + (i + " ");
        }else{}
    }
    document.getElementById("parrafoRespuesta").innerHTML = text;
}                                            
    
    
