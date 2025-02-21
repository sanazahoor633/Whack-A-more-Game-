let currMoreTile;
let currPlant;
let score = 0;
let gameOver = false;



window.onload = function(){
   setGame();
}

function setGame(){
    if(gameOver){
return;
    }
    for(let i = 0; i < 9; i++){
        ///di id 0-to 8;
let til = document.createElement("div");
til.id = i.toString();
til.addEventListener("click", selectTile);
document.getElementById("board").appendChild(til);
//console.log(til)
    }

 setInterval(setMole, 2000);
   setInterval(setPlant, 3000); //// 2sec
};

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
            }
    if(currMoreTile){
currMoreTile.innerHTML = "";
    }
let mole = document.createElement("img");
mole.src = "monty-mole.png";
let num = getRandomTile();
if(currPlant && currPlant.id == num){
return;
}
currMoreTile = document.getElementById(num);
currMoreTile.appendChild(mole);
console.log(mole);
}

function setPlant(){
    if(gameOver){
        return;
            }
if(currPlant){
    currPlant.innerHTML = "";
}
let plant = document.createElement("img");
plant.src = "piranha-plant.png";
let num = getRandomTile();
if(currMoreTile && currMoreTile.id == num){
return;
}
currPlant = document.getElementById(num);
currPlant.appendChild(plant);
console.log(plant);
};


function selectTile(){

    if(gameOver){
        return;
            }
if(this == currMoreTile){
score += 10;
document.getElementById("score").textContent = score.toString();
}  else if(this == currPlant){
document.getElementById("score").textContent = "GAME OVER " + score.toString();;
gameOver = true;
}
}







/*document.getElementById("score").textContent = "GAME OVER" + score.toString(); 
document.getElementById("score").textContent = "GAME OVER: " + score.toString();*/