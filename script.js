const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.padding = "0";
container.style.height = "50vh";
container.style.width = "50vh"


for (let i = 0; i<256; i++) {
    const square = document.createElement("div");
    square.style.height = "6.25%";
    square.style.backgroundColor = "black";

    square.style.boxSizing = "border-box";
    
    square.style.flex = "1 1 6.25%";

    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "blue";

    });
    
    container.appendChild(square)

};