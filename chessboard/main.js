const board = document.createElement("table"); 
let brojac = 0; 


for (let i = 0; i < 8; i++) {
  const row = document.createElement("tr"); 
  for (let j = 0; j < 8; j++) {
    const field = document.createElement("td");
    field.innerHTML = brojac; 
    brojac = brojac + 1; 
    if ((i + j) % 2 ==0) {
      field.classList.add("black"); 
    } else {
      field.classList.add("white"); 
    }

    row.appendChild(field); 
    
  }
  board.appendChild(row); 
}
document.body.appendChild(board);