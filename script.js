
let load = document.getElementById("load");
// let emoji = document.getElementById("happy1");
let emoji1 = document.getElementById("happy");
// let emoji = document.getElementById("happy");
var clickCount = 0;




const multiClick = function() {
    let count = 0;
    const funct1 = function() {
        emoji1.innerHTML = "😁";
    }
    const funct2 = function() {
      emoji1.innerHTML = "🤣";
      
        
    }
    const funct3 = function() {
      emoji1.innerHTML = "😉";
      

    }
    
    const nextCount = function() {
  load.innerHTML = "Happy";

            if(count===1) funct1();
            else if(count===2) funct2();
            else funct3();
    }
        
    return function() {
            count=count===2?0:count+1;
            nextCount();
        }
    
}();  




const multiClick1 = function() {
  let count = 0;

  const funct1 = function() {
      emoji1.innerHTML = "😔";
  }
  const funct2 = function() {
    emoji1.innerHTML = "😟";
    
      
  }
  const funct3 = function() {
    emoji1.innerHTML = "😭";
    

  }
  
  const nextCount = function() {
  load.innerHTML = "Sad";

          if(count===1) funct1();
          else if(count===2) funct2();
          else funct3();
  }
      
  return function() {
          count=count===2?0:count+1;
          nextCount();
      }
  
}();  







const multiClick2 = function() {
  let count = 0;
  const funct1 = function() {
      emoji1.innerHTML = "😤";
  }
  const funct2 = function() {
    emoji1.innerHTML = "😡";
    
      
  }
  const funct3 = function() {
    emoji1.innerHTML = "😠";
    

  }
  
  const nextCount = function() {
  load.innerHTML = "Angry";

          if(count===1) funct1();
          else if(count===2) funct2();
          else funct3();
  }
      
  return function() {
          count=count===2?0:count+1;
          nextCount();
      }
  
}();  






const multiClick3 = function() {
  let count = 0;
  const funct1 = function() {
      emoji1.innerHTML = "😜";
  }
  const funct2 = function() {
    emoji1.innerHTML = "🤪";
    
      
  }
  const funct3 = function() {
    emoji1.innerHTML = "😛";
    

  }
  
  const nextCount = function() {
  load.innerHTML = "Excited";

          if(count===1) funct1();
          else if(count===2) funct2();
          else funct3();
  }
      
  return function() {
          count=count===2?0:count+1;
          nextCount();
      }
  
}();  