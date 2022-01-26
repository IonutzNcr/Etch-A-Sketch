const container = document.querySelector(".container");

function createDiv(){
    const div = document.createElement("div");
    container.appendChild(div);
}

function createRow(numberOfDiv){
    
    console.log(numberOfDiv)
    if(numberOfDiv == 1) {
        
        createDiv()
    } 
    else {
        createDiv()
        createRow(numberOfDiv-1)
    } 
}
createRow(16)