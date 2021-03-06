

function player(x, y){
  this.w = 10;
  this.h = 10;
  this.x = x;
  this.y = y;
  
  this.show = function(){
    fill(255);
    
    rect(this.x + (tileWidth - this.w) / 4, this.y + (tileWidth - this.h) / 4, this.w, this.h);
  }
  
  this.move = function(){
    
    if(pos === posPos.length - 1){
      win = 1;
      moveNum = 0;
      return;
    }
    
    mN = abs(moveNum) / moveNum;
    if(dist(this.x, this.y, posPos[pos + mN][0] * tileWidth, posPos[pos + mN][1] * tileWidth) >= 3){
      if(this.x < posPos[pos + mN][0] * tileWidth){
          this.x += 2;
      }else if(this.x > posPos[pos + mN][0] * tileWidth){
          this.x -= 2;
      }
      
      if(this.y < posPos[pos + mN][1] * tileWidth){
          this.y += 2;
      }else if(this.y > posPos[pos + mN][1] * tileWidth){
          this.y -= 2;
      }
      if(dist(this.x, this.y, posPos[pos + mN][0] * tileWidth, posPos[pos + mN][1] * tileWidth) <= 3){
        this.x = posPos[pos + mN][0] * tileWidth;
        this.y = posPos[pos + mN][1] * tileWidth;
        moveNum -= mN;
        pos += mN;
        
        
        
        if(moveNum === 0){
          if(level.tiles[this.x / tileWidth + this.y / tileWidth * 12].subtype === 1){
            moveNum = -2;
          }else if(level.tiles[this.x / tileWidth + this.y / tileWidth * 12].subtype === 0){
            moveNum = floor(random() * 5) + 1;
          }else{
            moveType = 1;
            if(diff === 'easy'){
              if(random(100) < 40){
                moveNum = floor(random() * 4) + 1;
              }else{
                moveType = -1;
              }
            }else if(diff === 'medium'){
              if(random(100) < 60){
                moveNum = floor(random() * 5) + 1;
              }else{
                moveType = -1;
              }
            }else{
              if(random(100) < 80){
                moveNum = floor(random() * 6) + 1;
              }else{
                moveType = -1;
              }
            }
            
            if(pos === posPos.length - 1){
              win = -1;
              moveNum = 0;
              return;
            }
          }
        }
      }
    }
    
  }
  
}