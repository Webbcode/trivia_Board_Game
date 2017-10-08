function level(){
  this.tiles = [];
  this.tileIds;
  this.player;
  this.bot;
  this.hasPlayer = false;
  
  
  eval(getRandomLevelData());
  this.tiles = [];
  for(var i = 0; i < this.tileIds.length;i++){
    this.tiles[i] = new tile(i % 12, floor(i / 12), this.tileIds[i][0], this.tileIds[i][1], this.tileIds[i][2]);
    
    if(this.tiles[i].id === 0){
      posPos[this.tiles[i].variant] = [this.tiles[i].x, this.tiles[i].y];
    }
    
    if(this.tiles[i].player){
      this.player = this.tiles[i].player;
      this.bot = this.tiles[i].bot;
      this.hasPlayer = true;
    }
  }
  
  
  this.advance = function(){
    this.advance = function(){
    eval(getRandomLevelData());
    this.tiles = [];
      for(var i = 0; i < this.tileIds.length;i++){
        this.tiles[i] = new tile(i % 12, floor(i / 12), this.tileIds[i][0], this.tileIds[i][1], this.tileIds[i][2]);
      }
    }
  }
  
  this.show = function (){
    for(var i = 0; i < this.tiles.length;i++){
      this.tiles[i].show();
    }
    
    this.bot.show();
    this.player.show();
  }
}