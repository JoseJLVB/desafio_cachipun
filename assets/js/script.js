var num1;
var num2;
var num3;
var num4 = 0;

num1 = prompt('Ingrese cantidad de partidas');

while (true) {

    if (num4 == num1) {
        break;
    }

    function cachipun(minimo, maximo)
    {
        var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
        return numero;
    }
    
    var piedra = 0;
    var papel = 1;
    var tijera = 2;
    
    var opciones = ["Piedra", "Papel", "Tijera"];
    
    var num2;
    var num3 = cachipun(0,2);
    
    num2 = prompt("Elige una de las siguientes opciones: \n -Piedra: 0\n -Papel: 1\n -Tijera: 2");
    
    alert("CPU eligió " + opciones[num3]);
    
    if(num2 == piedra)
    {
        if(num3 == piedra)
        {
            alert("Hay un EMPATE");
        }
        else if(num3 == papel)
        {
            alert("CPU ha GANADO esta partida");
        }
        else if(num3 == tijera)
        {
            alert("GANASTE esta partida");
        }
    }
    else if(num2 == papel)
    {
        if(num3 == piedra)
        {
            alert("GANASTE esta partida");
        }
        else if(num3 == papel)
        {
            alert("Hay un EMPATE");
        }
        else if(num3 == tijera)
        {
            alert("CPU ha GANADO esta partida");
        }
    }
    else if(num2 == tijera)
    {
        if(num3 == piedra)
        {
            alert("CPU ha GANADO esta partida");
        }
        else if(num3 == papel)
        {
            alert("GANASTE esta partida");
        }
        else if(num3 == tijera)
        {
            alert("Hay un EMPATE");
        }
    }  
    
    num4 +=1
}

console.log ('FIN DEL JUEGO');