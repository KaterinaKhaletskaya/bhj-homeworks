
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`).className.includes(hole_has-mole);





for(getHole = 1; getHole < 10; getHole++){
    if (getHole){
        dead.onclick = dead.textContent++;
    } 
}

// dead.onclick = function(){

    
//     if (dead.textContent > 0){
//         dead.textContent = parseInt(dead.textContent) + 1;
//     }
//     else if (dead.textContent = 10) {
//           alert("Вы победили!");  
//     }


    
//     if (lost.textContent > 0){
//         lost.textContent = parseInt(lost.textContent) + 1;
//     }
//     else if (lost.textContent = 10) {
//               alert("Вы проиграли!");  
//     }    
    
// }
