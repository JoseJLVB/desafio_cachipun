function cachipun(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = cachipun(0,2);

opcionUsuario = prompt("Elige una de las siguientes opciones: \n -Piedra: 0\n -Papel: 1\n -Tijera: 2");

alert("CPU eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Hay un EMPATE");
    }
    else if(opcionMaquina == papel)
    {
        alert("CPU ha GANADO esta partida");
    }
    else if(opcionMaquina == tijera)
    {
        alert("GANASTE esta partida");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("GANASTE esta partida");
    }
    else if(opcionMaquina == papel)
    {
        alert("Hay un EMPATE");
    }
    else if(opcionMaquina == tijera)
    {
        alert("CPU ha GANADO esta partida");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("CPU ha GANADO esta partida");
    }
    else if(opcionMaquina == papel)
    {
        alert("GANASTE esta partida");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Hay un EMPATE");
    }
}
