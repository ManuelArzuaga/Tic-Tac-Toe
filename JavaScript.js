const casilla1 = document.getElementById("1");
const casilla2 = document.getElementById("2");
const casilla3 = document.getElementById("3");
const casilla4 = document.getElementById("4");
const casilla5 = document.getElementById("5");
const casilla6 = document.getElementById("6");
const casilla7 = document.getElementById("7");
const casilla8 = document.getElementById("8");
const casilla9 = document.getElementById("9");
let elegidoX1 = false;
let elegidoO1 = false;
let elegidoX2 = false;
let elegidoO2 = false;
let elegidoX3 = false;
let elegidoO3 = false;
let elegidoX4 = false;
let elegidoO4 = false;
let elegidoX5 = false;
let elegidoO5 = false;
let elegidoX6 = false;
let elegidoO6 = false;
let elegidoX7 = false;
let elegidoO7 = false;
let elegidoX8 = false;
let elegidoO8 = false;
let elegidoX9 = false;
let elegidoO9 = false;

let tablero = [ //vector de vectores (matriz)
  [],
  [],
  []
];

casilla1.onclick = function(){
  selectPlaceX1();
}

casilla1.ondblclick = function(){
  selectPlaceO1();
}
casilla2.onclick = function(){
  selectPlaceX2();
}

casilla2.ondblclick = function(){
  selectPlaceO2();
}
casilla3.onclick = function(){
  selectPlaceX3();
}

casilla3.ondblclick = function(){
  selectPlaceO3();
}
casilla4.onclick = function(){
  selectPlaceX4();
}

casilla4.ondblclick = function(){
  selectPlaceO4();
}
casilla5.onclick = function(){
  selectPlaceX5();
}

casilla5.ondblclick = function(){
  selectPlaceO5();
}
casilla6.onclick = function(){
  selectPlaceX6();
}

casilla6.ondblclick = function(){
  selectPlaceO6();
}
casilla7.onclick = function(){
  selectPlaceX7();
}

casilla7.ondblclick = function(){
  selectPlaceO7();
}
casilla8.onclick = function(){
  selectPlaceX8();
}

casilla8.ondblclick = function(){
  selectPlaceO8();
}
casilla9.onclick = function(){
  selectPlaceX9();
}

casilla9.ondblclick = function(){
  selectPlaceO9();

}

function selectPlaceX1(){
  if(!elegidoX1){
    element = document.createElement("div");
    element.textContent = "X"
    casilla1.appendChild(element);
    elegidoX1 = true
    tablero[0][0] = "x"
    gameControler();
  }
  
}

function selectPlaceO1(){

    if(!elegidoO1){

      // element = document.createElement("div");
      element.textContent = ""
      element.textContent = "O"
      casilla1.appendChild(element);
      elegidoO1 = true
      tablero[0][0] = "O"
      gameControler();
    }
  }

  function selectPlaceX2(){
    if(!elegidoX2){
      element = document.createElement("div");
      element.textContent = "X"
      casilla2.appendChild(element);
      elegidoX2 = true
      tablero[0][1] = "x"
      gameControler();
    }
    
  }
  
  function selectPlaceO2(){
  
      if(!elegidoO2){
  
        // element = document.createElement("div");
        element.textContent = ""
        element.textContent = "O"
        casilla2.appendChild(element);
        elegidoO2 = true
        tablero[0][1] = "O"
        gameControler();
        
      }
    }
    function selectPlaceX3(){
      if(!elegidoX3){
        element = document.createElement("div");
        element.textContent = "X"
        casilla3.appendChild(element);
        elegidoX3 = true
        tablero[0][2] = "x"
        gameControler();
      }
      
    }
    
    function selectPlaceO3(){
    
        if(!elegidoO3){
    
          // element = document.createElement("div");
          element.textContent = ""
          element.textContent = "O"
          casilla3.appendChild(element);
          elegidoO3 = true
          tablero[0][2] = "O"
          gameControler();
        }
      }
      function selectPlaceX4(){
        if(!elegidoX4){
          element = document.createElement("div");
          element.textContent = "X"
          casilla4.appendChild(element);
          elegidoX4 = true
          tablero[1][0] = "x"
          gameControler();
        }
        
      }
      
      function selectPlaceO4(){
      
          if(!elegidoO4){
      
            // element = document.createElement("div");
            element.textContent = ""
            element.textContent = "O"
            casilla4.appendChild(element);
            elegidoO4 = true
            tablero[1][0] = "O"
            gameControler();
          }
        }
        function selectPlaceX5(){
          if(!elegidoX5){
            element = document.createElement("div");
            element.textContent = "X"
            casilla5.appendChild(element);
            elegidoX5 = true
            tablero[1][1] = "x"
            gameControler();
          }
          
        }
        
      function selectPlaceO5(){
        
          if(!elegidoO5){
        
            // element = document.createElement("div");
            element.textContent = ""
            element.textContent = "O"
            casilla5.appendChild(element);
            elegidoO5 = true
            tablero[1][1] = "O"
            gameControler();
          }
        }
      function selectPlaceX6(){
          if(!elegidoX6){
            element = document.createElement("div");
            element.textContent = "X"
            casilla6.appendChild(element);
            elegidoX6 = true
            tablero[1][2] = "x"
            gameControler();
          }
            
        }
          
      function selectPlaceO6(){
          
          if(!elegidoO6){
          
            // element = document.createElement("div");
            element.textContent = ""
            element.textContent = "O"
            casilla6.appendChild(element);
            elegidoO6 = true
            tablero[1][2] = "O"
            gameControler();
            }
          }
      function selectPlaceX7(){
          if(!elegidoX7){
            element = document.createElement("div");
            element.textContent = "X"
            casilla7.appendChild(element);
            elegidoX7 = true
            tablero[2][0] = "x"
            gameControler();
          }
              
        }
            
      function selectPlaceO7(){
            
          if(!elegidoO7){
            
            // element = document.createElement("div");
            element.textContent = ""
            element.textContent = "O"
            casilla7.appendChild(element);
            elegidoO7 = true
            tablero[2][0] = "O"
            gameControler();
          }
        }
      function selectPlaceX8(){
          if(!elegidoX8){
            element = document.createElement("div");
            element.textContent = "X"
            casilla8.appendChild(element);
            elegidoX8 = true
            tablero[2][1] = "x"
            gameControler();
          }
                
        }
              
      function selectPlaceO8(){
        if(!elegidoO8){
              
        // element = document.createElement("div");
        element.textContent = ""
        element.textContent = "O"
        casilla8.appendChild(element);
        elegidoO8 = true
        tablero[2][1] = "O"
        gameControler();
          }
        }
        function selectPlaceX9(){
          if(!elegidoX9){
          element = document.createElement("div");
          element.textContent = "X"
          casilla9.appendChild(element);
          elegidoX9 = true
          tablero[2][2] = "x"
          gameControler();
          }
        }
                
        function selectPlaceO9(){
                
          if(!elegidoO9){
                
          // element = document.createElement("div");
          element.textContent = ""
          element.textContent = "O"
          casilla9.appendChild(element);
          elegidoO9 = true
          tablero[2][2] = "O"
          gameControler();
          }
        }
      
      function gameControler(){
        if(tablero[0][0] === "x" && tablero[0][1] === "x" && tablero[0][2] === "x"){
          console.log("gana X");
        }
        if(tablero[0][0] === "O" && tablero[0][1] === "O" && tablero[0][2] === "O"){
          console.log("gana O");
        }
        if(tablero[1][0] === "x" && tablero[1][1] === "x" && tablero[1][2] === "x"){
          console.log("gana X");
        }
        if(tablero[1][0] === "O" && tablero[1][1] === "O" && tablero[1][2] === "O"){
          console.log("gana O");
        }
        if(tablero[2][0] === "x" && tablero[2][1] === "x" && tablero[2][2] === "x"){
          console.log("gana X");
        }
        if(tablero[2][0] === "O" && tablero[2][1] === "O" && tablero[2][2] === "O"){
          console.log("gana O");
        }
        if(tablero[0][0] === "x" && tablero[1][0] === "x" && tablero[2][0] === "x"){
          console.log("gana X");
        }
        if(tablero[0][0] === "O" && tablero[1][0] === "O" && tablero[2][0] === "O"){
          console.log("gana O");
        }
        if(tablero[0][1] === "x" && tablero[1][1] === "x" && tablero[2][1] === "x"){
          console.log("gana X");
        }
        if(tablero[0][1] === "O" && tablero[1][1] === "O" && tablero[2][1] === "O"){
          console.log("gana O");
        }
        if(tablero[0][2] === "x" && tablero[1][2] === "x" && tablero[2][2] === "x"){
          console.log("gana X");
        }
        if(tablero[0][2] === "O" && tablero[1][2] === "O" && tablero[2][2] === "O"){
          console.log("gana O");
        }
        if(tablero[0][0] === "x" && tablero[1][1] === "x" && tablero[2][2] === "x"){
          console.log("gana X");
        }
        if(tablero[0][0] === "O" && tablero[1][1] === "O" && tablero[2][2] === "O"){
          console.log("gana O");
        }
        if(tablero[0][2] === "x" && tablero[1][1] === "x" && tablero[2][0] === "x"){
          console.log("gana X");
        }
        if(tablero[0][2] === "O" && tablero[1][1] === "O" && tablero[2][0] === "O"){
          console.log("gana O");
        }
      }

   