let quadradinhos = document.querySelectorAll("div");

function trocarCor(event){
   event.target.style.backgroundColor = "blue";
   console.log(event)
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = trocarCor;
}
