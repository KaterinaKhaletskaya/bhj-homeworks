let hasTtooltips = Array.from(document.querySelectorAll('a.has-tooltip'));
let header = document.querySelector('.header');



header.insertAdjacentHTML("afterEnd",
    "<div class='tooltip' style='left: 0; top: 0'></div>"
);  


let tooltip = document.querySelector('.tooltip');

for(let i of hasTtooltips) {
    i.addEventListener('click', (elem)=> {
        elem.preventDefault();
     
        
        let titleText = i.title;
        if(tooltip.textContent === titleText) {
            tooltip.classList.toggle('tooltip_active');
        }else {
            tooltip.classList.add('tooltip_active');
            tooltip.textContent = titleText;
            
        }
  
    })
}

