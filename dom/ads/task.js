setInterval(play, 1000);


function play(){
    const rotatorCase = document.querySelectorAll('.rotator__case');
    const rotatorCaseActive = document.querySelectorAll('.rotator__case.rotator__case_active');


    for(let i = 0; i < rotatorCase.length; i++){
   rotatorCase[i].classList.toggle('rotator__case_active');

}
}


    // for(let i = 0; i < rotatorCase.length; i++){
    //     if (rotatorCaseActive[i]){
    //         rotatorCase[i].classList.remove('rotator__case_active');
    //     } else {
    //         rotatorCase[i].classList.add('rotator__case_active');
    //     }
    // }


