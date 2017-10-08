var defSize = 20;

function button(x, y, pText, tSize, f){
  this.x = x;
  this.y = y;
  this.pText = pText;
  this.tSize = tSize;
  this.hover = 0;
  this.pressed = false;
  this.released = false;
  this.f = f;
  this.bkc = [0, 255];
  this.tc = [255, 0];
  
  this.tick = function(){
    if(collidePointRect(mouseX, mouseY, x, y, (pText.length + 2) * tSize/ 2, tSize + 10)){
      this.hover = 1;
    }else{
      this.hover = 0;
    }
    
    if(this.pressed && !mouseIsPressed){
      this.pressed = false;
      this.released = true;
    }else if(this.released){
      this.released = false;
    }
    
    
  }
  
  this.show = function(){
    fill(this.bkc[this.hover]);
    rect(this.x, this.y, (pText.length + 2) * tSize / 2, tSize + 10);
    
    fill(this.tc[this.hover]);
    text(this.pText, this.x + this.tSize, this.y + this.tSize);
  }
  
  this.click = function(){
    if(collidePointRect(mouseX, mouseY, x, y, (pText.length + 2) * tSize/ 2, tSize + 10)){
      this.pressed = true;
      this.f();
    }
  }
  
}