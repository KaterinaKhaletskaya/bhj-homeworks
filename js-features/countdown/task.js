
addTimer = function(){

    let timer = document.getElementById("timer");
    timer.textContent = parseInt(timer.textContent) - 1;
  
    if (timer.textContent == 0){
        alert("Вы победили в конкурсе!");
    }
}
setInterval(addTimer, 1000);