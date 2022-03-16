
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }/*I don't Know what am I doing!!!*/ 
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  /*RIGHT_KEY.exe is dead*/
  
  if(keyDown("a")){
    background(rgb(33,37,28));
  }
  
  if(keyDown("b")){
    background("beige");
  } 
  
  if(keyDown("c")){
    background(rgb(222,49,99));
  }
  
  if(keyDown("d")){
    background("#FED85D");
  }
  
  if(keyDown("e")){
    background("#50C878");
  } 
  
  if(keyDown("f")){
    background("#B22222");
  }
  
  if(keyDown("g")){
    background("#00573F");
  }
  
  if(keyDown("h")){
    background("#5218FA");
  }
  
  if(keyDown("i")){
    background("#319177");
  }
  
  if(keyDown("j")){
    background("#e0d191");
  }
  
  if(keyDown("k")){
    background("khaki");
  }
  
  if(keyDown("l")){
    background("#EF9A9A");
  }
  
  if(keyDown("m")){
    background("#EC407A");
  } 

  if(keyDown("n")){
    background("#673AB7");
  } 

  if(keyDown("o")){
    background("#18FFFF");
  } 

  if(keyDown("p")){
    background("#9E9D24");
  } 

  if(keyDown("q")){
    background("#FB8C00");
  } 

  if(keyDown("r")){
    background("#1976D2");
  } 

  if(keyDown("s")){
    background("#2E7D32");
  } 

  if(keyDown("t")){
    background("#FF9800");
  } 

  if(keyDown("u")){
    background("#80CBC4");
  } 

  if(keyDown("v")){
    background("#4A148C");
  } 

  if(keyDown("w")){
    background("#7C4DFF");
  } 

  if(keyDown("x")){
    background("#651FFF");
  } 

  if(keyDown("y")){
    background("#6200EA");
  }
  
  if(keyDown("1")){
    background("#9E9D24");
  } 

  if(keyDown("2")){
    background("#FB8C00");
  } 

  if(keyDown("3")){
    background("#1976D2");
  } 

  if(keyDown("4")){
    background("#2E7D32");
  } 

  if(keyDown("5")){
    background("#FF9800");
  } 

  if(keyDown("6")){
    background("#80CBC4");
  } 

  if(keyDown("7")){
    background("#4A148C");
  } 

  if(keyDown("8")){
    background("#7C4DFF");
  } 

  if(keyDown("9")){
    background("#651FFF");
  } 

  if(keyDown("0")){
    background("#6200EA");
  } 

  if(keyDown("z")){
    background("#4A148C");
  } 

  if(keyDown("space")){
    background("#FF5252");
  } 
 
  drawSprites();
}

