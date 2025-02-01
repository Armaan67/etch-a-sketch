const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.padding = "0";
container.style.height = "65vh";
container.style.width = "65vh"


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    

function addSquares(size) {
    for (let i = 0; i<size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        let dimension = 100/size
        square.style.height = dimension.toString() + "%";
        square.style.backgroundColor = "black";
    
        square.style.boxSizing = "border-box";
        
        square.style.flexGrow = "1";
        square.style.flexShrink = "1";
        square.style.flexBasis = dimension.toString() + "%";

        square.addEventListener("mousedown", () => {
            if (modeButtonState) {
                if (colorButtonState) {
                    square.style.backgroundColor = getRandomColor()
                } else {
                    square.style.backgroundColor = colorPicker.value;
                }
            }

        })

        square.addEventListener("mouseenter", () => {
            if (!modeButtonState) {
                if (colorButtonState) {
                    square.style.backgroundColor = getRandomColor()
                } else {
                    square.style.backgroundColor = colorPicker.value;
                }
            }
        }) 

        

     
        
        
        container.appendChild(square)
    
    };
}

const modeButton = document.querySelector(".mode")
let modeButtonState = false;

modeButton.addEventListener("click", () =>{
    modeButtonState = !modeButtonState

    if (modeButtonState) {
        modeButton.style.backgroundColor = "#7b5b4a";
        modeButton.style.color = "#faf3e0";
    } else {
        modeButton.style.backgroundColor = "#faf3e0";
        modeButton.style.color = "#7b5b4a";
    }

})


addSquares(16);


const clearbutton = document.querySelector(".clearbutton");

clearbutton.addEventListener("click", () => {
    squares = document.querySelectorAll(".square")
    squares.forEach((item) => {
        item.style.backgroundColor = "black"
    })


})



const gridbutton = document.querySelector(".grid-size")
gridbutton.addEventListener("click", () => {
    squares = document.querySelectorAll(".square")

    let gridSize = parseInt(prompt("Enter Grid Size (Max: 100)"));
    while (isNaN(gridSize) || gridSize > 100) {
        alert("Enter valid grid size! (Max: 100)");
        gridSize = parseInt(prompt("Enter Grid Size"))

    };

    squares.forEach((square) => {
        square.remove()
    });

    addSquares(gridSize);

})


const colorButton = document.querySelector(".color");
const colorPicker = document.querySelector(".color .colorpicker")

let colorButtonState = false; // false = off, true = on (random color)

colorButton.addEventListener("click", () => {
    colorButtonState = !colorButtonState

    if (colorButtonState) {
        colorButton.style.backgroundColor = "#7b5b4a";
        colorButton.style.color = "#faf3e0";
        colorPicker.style.backgroundColor = "#7b5b4a"; // make this constantly changing to show random colors being generated

    } else {
        colorButton.style.backgroundColor = "#faf3e0";
        colorButton.style.color = "#7b5b4a";
        colorPicker.style.backgroundColor = "#faf3e0"; 
    }

});

colorPicker.addEventListener("click", (event) => {
    event.stopPropagation()
    
    
})


