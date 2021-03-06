const container = document.querySelector(".container");

//initialisation of the function parameter 
let nbrOfDiv  = 16;
let nbrOfElementsInArow= nbrOfDiv;
let nbrOfColumn = 16;

function createColumn(numberOfColumn){
    const secondContainer = document.createElement("div");
    secondContainer.setAttribute("class","secondContainer");
    // It will repeat createSingleDiv() 
    function createRow(numberOfRepetition){
    
    function createSingleDiv(){
        const div = document.createElement("div");
        
        secondContainer.appendChild(div);
        
    }
    //recursion Time
    if(numberOfRepetition==1){
        createSingleDiv();
        container.appendChild(secondContainer);
    } else {
        createSingleDiv();
        
        createRow(numberOfRepetition-1);
        }
    }


    //recursion for Column 
    if(numberOfColumn==1){
        createRow(nbrOfDiv);
    } else {
        createRow(nbrOfDiv);
        createColumn(numberOfColumn-1);
    }
}


createColumn(nbrOfColumn);

// add size because I couldn't do it inside the recursion 
// add event listener to add effect and reset 
const smallDiv = document.querySelectorAll(".secondContainer div");

smallDiv.forEach(div=>{
    div.style.width = `${(600/nbrOfElementsInArow)}px`;
    div.style.height = `${(600/nbrOfElementsInArow)}px`;
    div.addEventListener("mouseenter",mouseIn);
    div.addEventListener("mouseout",mouseOut);
})

// add opacity 
//add random color for the backgroundColor;
let opacity;
let previousOpacity; // keep the old opacity value and prevent the lost of the previous value when inside of mousIn()
function mouseIn(e){
    previousOpacity=+e.currentTarget.style.opacity;
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.backgroundColor  = randomRgb();
}

function randomRgb(){
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    
    return `rgb(${red},${green},${blue})`
}

function mouseOut(e){
    opacity = previousOpacity;
    e.currentTarget.style.opacity = `${opacity}`
    e.currentTarget.style.backgroundColor = "black";
    if(!e.currentTarget.style.opacity){
        opacity=0.1;
        e.currentTarget.style.opacity = `${opacity}`;
    } else {
        opacity = +e.currentTarget.style.opacity
        e.currentTarget.style.opacity = `${opacity+=0.1}`
       
    }
}

//add reset boutton that will reset the grid size 

const button  = document.querySelector("button")
const scdContainer = document.querySelectorAll(".secondContainer")

button.addEventListener("click",resetScreen)

function resetScreen(){
    const scdContainer = document.querySelectorAll('.secondContainer')
    scdContainer.forEach(div=>container.removeChild(div))
    //reset functions parameter to new values then recreate the grid with createColumn
    nbrOfColumn = +prompt("Size of the grid:"); // a number
    nbrOfDiv = nbrOfColumn; // a number
    nbrOfElementsInArow= nbrOfColumn; // a number
   
    
    if (nbrOfColumn == nbrOfDiv && nbrOfColumn<101){
        createColumn(nbrOfColumn);

        const container_nb_2 = document.querySelectorAll(".secondContainer>div")
        
        container_nb_2.forEach(div=>{
            div.style.width = `${(600/nbrOfElementsInArow)}px`;
            div.style.height = `${(600/nbrOfElementsInArow)}px`;
            div.addEventListener("mouseenter",mouseIn);
            div.addEventListener("mouseout",mouseOut);
        })
    } else {
        resetScreen()
    }

}