
let cookie = document.getElementById("cookie");

cookie.onclick = function(){
    let counter = document.getElementById("clicker__counter");
    counter.textContent = parseInt(counter.textContent) + 1;

    if (cookie.width === 200){
        cookie.width = 180;}
    else {
        cookie.width = 200;  
    }
}