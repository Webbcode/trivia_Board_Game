
function stateManager(s){
  this.s = s;
  this.run = s.run;
  this.click = s.click;
  
  this.changeState = function(s){
    this.s = s;
    this.run = s.run;
    this.click = s.click();
  }
  
  
  
}

function state(run, click){
  this.run = run;
  if(click){
    this.click = click;
  }else{
    this.click = function(){};
  }
  
}