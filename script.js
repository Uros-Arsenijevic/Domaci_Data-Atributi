
for(let i = 0; i <100; i++){
    let NewElement = document.createElement("div");
    NewElement.className = "conteiner";

    if(i % 2 === 0){
        NewElement.style.backgroundColor = "red";
    }else{
        NewElement.style.backgroundColor = "blue";
    }

    document.body.appendChild(NewElement);

    NewElement.addEventListener("click", () => NewElement.style.backgroundColor = "#000")
}