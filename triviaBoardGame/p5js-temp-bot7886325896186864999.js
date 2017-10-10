function bot(x, y){
  this.w = 10;
  this.h = 10;
  this.x = x;
  this.y = y;
  
  this.show = function(){
    fill(255, 255, 0);
    
    rect(this.x + (tileWidth - this.w) / 4 * 3, this.y + (tileWidth - this.h) / 4 * 3, this.w, this.h);
  }
  
  this.move = function(){
    
    if(botPos === posPos.length - 1){
      win = -1;
      botMoveNum = 0;
      return;
    }
    
    mN = abs(botMoveNum) / botMoveNum;
    if(dist(this.x, this.y, posPos[botPos + mN][0] * tileWidth, posPos[botPos + mN][1] * tileWidth) >= 3){
      if(this.x < posPos[botPos + mN][0] * tileWidth){
          this.x += 2;
      }else if(this.x > posPos[botPos + mN][0] * tileWidth){
          this.x -= 2;
      }
      
      if(this.y < posPos[botPos + mN][1] * tileWidth){
          this.y += 2;
      }else if(this.y > posPos[botPos + mN][1] * tileWidth){
          this.y -= 2;
      }
      if(dist(this.x, this.y, posPos[botPos + mN][0] * tileWidth, posPos[botPos + mN][1] * tileWidth) <= 3){
        this.x = posPos[botPos + mN][0] * tileWidth;
        this.y = posPos[botPos + mN][1] * tileWidth;
        botMoveNum -= mN;
        botPos += mN;
        
        
        
        if(botMoveNum === 0){
          if(level.tiles[this.x / tileWidth + this.y / tileWidth * 12].subtype === 1){
            botMoveNum = -2;
          }else if(level.tiles[this.x / tileWidth + this.y / tileWidth * 12].subtype === 0){
            botMoveNum = floor(random() * 5) + 1;
          }
          
          if(botPos === posPos.length - 1){
            win = -1;
            botMoveNum = 0;
            return;
          }
        }
      }
    }
    
  }
  
}