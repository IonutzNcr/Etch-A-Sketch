const container = document.querySelector(".container");


function createColumn(numberOfColumn){
    const secondContainer = document.createElement("div")
    function createRow(numberOfDiv){
    

        function createDiv(){
            
            const div = document.createElement("div");
            secondContainer.appendChild(div);
        }
        
        
        if(numberOfDiv == 1) {
            
            createDiv()
            container.appendChild(secondContainer)
            
        } 
        else {
           
            createDiv()
            createRow(numberOfDiv-1)
        } 
        
    }
    

    if(numberOfColumn==1){
        
        createRow(16)
    } else {
        
        createRow(16)
        createColumn(numberOfColumn-1)
    }
    
}

createColumn(16);

const divs = document.querySelectorAll('.container div div')
console.log(divs)
function hoverOver(e){
    
    e.currentTarget.style.backgroundColor = "red"
}

function hoverEnd(e) {
    e.currentTarget.style.backgroundColor = "white"
}

divs.forEach(div=>div.addEventListener('mouseenter',hoverOver))
divs.forEach(div=>div.addEventListener('mouseout',hoverEnd))
