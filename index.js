const container = document.querySelector(".container");
const secondContainer = document.createElement("div")


function createRow(numberOfDiv){
    

    function createDiv(){
        
        const div = document.createElement("div");
        secondContainer.appendChild(div);
    }
    
    console.log(numberOfDiv)
    if(numberOfDiv == 1) {
        
        createDiv()
        container.appendChild(secondContainer)
        
    } 
    else {
       
        createDiv()
        createRow(numberOfDiv-1)
    } 
    
}
createRow(16)