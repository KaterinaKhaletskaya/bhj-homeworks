
const cookie = document.getElementById("cookie");

cookie.onclick = function(){
    const counter = document.getElementById("clicker__counter");
    counter.textContent = parseInt(counter.textContent) + 1;

    if (cookie.width === 200){
        cookie.width = 180;}
    else {
        cookie.width = 200;  
    }
}


// const cookie = document.getElementById("cookie");
// const counter = document.getElementById("clicker__counter");

// cookie.onclick = function () {
// cookie.width = ++counter.textContent % 2 ? 250 : 200;
// };