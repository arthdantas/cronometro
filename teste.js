var container=document.getElementById('container');
var relogio=document.getElementById('relogio');

const hour =document.getElementById('horas');
const min =document.getElementById('minutos');
const sec =document.getElementById('segundos');

setInterval(function() {
    var HorarioAtual = new Date();
    hour.innerHTML = HorarioAtual.getHours();
    min.innerHTML = HorarioAtual.getMinutes();
    sec.innerHTML = HorarioAtual.getSeconds();

    if (sec.innerHTML<10){
        sec.innerHTML = "0" + sec.innerHTML;
    }

    if (hour.innerHTML<10){
        hour.innerHTML = "0" + hour.innerHTML;
    }
})