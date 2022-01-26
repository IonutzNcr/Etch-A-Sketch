const container = document.querySelector(".container");




//initialisation of the function parameter 
let nmbrOfDiv  = 16;
let nmbrOfElementsInArow = nmbrOfDiv;
let nbrOfColumn = 16;

function createColumn(numberOfColumn){
    const secondContainer = document.createElement("div")
    secondContainer.setAttribute("class","secondContainer")
    // It will repeat createSingleDiv() 
    function createRow(numberOfRepetition){
    
    function createSingleDiv(){
        const div = document.createElement("div");
        
        secondContainer.appendChild(div)
        
    }
    //recursion Time
    if(numberOfRepetition==1){
        createSingleDiv();
        container.appendChild(secondContainer);
    } else {
        createSingleDiv();
        
        createRow(numberOfRepetition-1)
        }
    }


    //recursion for Column 
    if(numberOfColumn==1){
        createRow(nmbrOfDiv);
    } else {
        createRow(nmbrOfDiv);
        createColumn(numberOfColumn-1);
    }
}


createColumn(nbrOfColumn);

const smallDiv = document.querySelectorAll(".secondContainer div")
console.log(smallDiv)
smallDiv.forEach(div=>{
    div.style.width = `${(600/nmbrOfElementsInArow)}px`;
    div.style.height = `${(600/nmbrOfElementsInArow)}px`;
})
