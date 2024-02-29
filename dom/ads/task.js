setInterval(play(), 1000);


function play(index){
    const rotatorCase = document.querySelectorAll('.rotator__case');
    const rotatorCaseActive = document.querySelectorAll('.rotator__case_active');


    for(index = 0; index < rotatorCase.length; index++){


        if (rotatorCaseActive[index]){
            rotatorCase[index].classList.remove('rotator__case_active');
        } else {
            rotatorCase[index].classList.add('rotator__case_active');
        }

}
}


    // for(let i = 0; i < rotatorCase.length; i++){
    //     if (rotatorCaseActive[i]){
    //         rotatorCase[i].classList.remove('rotator__case_active');
    //     } else {
    //         rotatorCase[i].classList.add('rotator__case_active');
    //     }
    // }


    // getHole = index => document.getElementById(`hole${index}`),
    // deactivateHole = index => getHole( index ).className = 'hole',
    // activateHole = index => getHole( index ).className = 'hole hole_has-mole',


// stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//         stars.forEach(s => s.classList.remove('star_active'));
//         const activeStars = [...stars].slice(0, index + 1);
//         activeStars.forEach((s) => s.classList.add('star_active'));
//     })
// })