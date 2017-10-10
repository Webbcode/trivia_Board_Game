
function tile(x, y, id, subtype, variant){
  this.x = x;
  this.y = y;
  this.id = id;
  this.subtype = subtype;
  this.variant = variant;
  this.w = 32;
  this.player = null;
  this.bot = null;
  this.on = false;
  
  if(this.id === 0 && this.variant === 0){
    this.player = new player(this.x * this.w, this.y * this.w);
    this.bot = new bot(this.x * this.w, this.y * this.w);
  }
  
  this.reset = function(){
    if(this.player !== null){
      this.player.x = this.x * this.w;
      this.player.y = this.y * this.w;
      this.bot.x = this.x * this.w;
      this.bot.y = this.y * this.w;
    }
  }
  
  this.show = function(){
    fill(tileType[this.id]);
    
    strokeWeight(1);
      stroke(0, 0, 0);
      
      if(this.id === 0){
        image(tileImgs[this.subtype], this.x * this.w, this.y * this.w, this.w, this.w);
        
        noFill();
        rect(this.x * this.w, this.y * this.w, this.w, this.w);
      }else if(this.id === 1){
        noStroke();
        rect(this.x * this.w, this.y * this.w, this.w, this.w);
      }else{
        image(tileImgs[1], this.x * this.w, this.y * this.w, this.w, this.w);
        
        fill(color('rgba(100,0,0,.1)'));
        noStroke();
        
        rect(this.x * this.w, this.y * this.w, this.w, this.w);
      }
      
      if(id === 0 && variant === 0){
        text("Start", this.x * this.w, this.y * this.w);
      }
      
      if(id === 0 && variant === 40){
        text("End", this.x * this.w, this.y * this.w);
      }
  }
  
  this.enterTile = function(xD, yD){
    if(this.id === 2){
      if(this.subtype === 0){
        if(xD > 0){
          this.on = true;
        }else if(xD < 0){
          this.on = false;
        }
      }else if(this.subtype === 1){
        if(yD > 0){
          this.on = true;
        }else if(yD < 0){
          this.on = false;
        }
      }else if(this.subtype === 2){
        if(xD < 0){
          this.on = true;
        }else if(xD > 0){
          this.on = false;
        }
      }else if(this.subtype === 3){
        if(yD < 0){
          this.on = true;
        }else if(yD > 0){
          this.on = false;
        }
      }
    }else if(this.id === 2 && this.subtype === 4){
      this.on = true;
    }
  }
  
  this.exitTile = function(xD, yD){
    if(this.id === 2 && this.subtype === 4){
      this.on = false;
    }
  }
  
}