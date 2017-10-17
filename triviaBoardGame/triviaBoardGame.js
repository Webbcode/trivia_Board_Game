var tileWidth;
var level;
var tileType;
var tileImgs = [];
var bk;
var butn;
var moveNum = 0;
var pos = 0;
var botPos = 0;
var posPos = [];
var questions = ["Points that do not lie on the same line are", "points that lie on the same plane are", "points not in the same plane are", "Something that cuts an object into two equal parts are", "A part of a line with two endpoints are", "A figure formed by two rays with a common endpoint is", "Basic unit of matter.", "The center of an atom which contains protons and neutrons.", "Substance consisting entirely of one type of atom.", "Substance formed by the chemical combination of two or more elements in definite proportions.", "Bond formed when one or more electrons are transferred from one atom to another.", "Bond formed by sharing electrons.", "Measurement system used to indicate the concentration of hydrogen ions in solution. Ranges from 0-14."];
var answers = [["noncolplanar", "noncollinear", "line", "planar"], ["coplanar", "noncollinear", "line", "none of these"], ["noncoplanar", "collinear", "line", "none of these"], ["perpendicular", "line", "bisector", "none of these"], ["line segment", "vector", "ray", "angle"], ["none of these", "ray", "line segment", "angle"], ["Compound", "Element", "Atom", "Ion"], ["Neucleus", "Center", "Atom", "N"], ["Element", "Atom", "Ion", "Compound"], ["Compound", "Ionic bond", "Ion", "Element"], ["Covalent bond", "Ionic bond", "Ion", "Element"], ["Covalent bond", "Ionic bond", "Ion", "Element"], ["Acid", "Base", "pH Scale", "Compound"]];
var questionNum = 0;
var correctAnswer = [1, 0, 0, 2, 1, 3, 2, 0, 0, 0, 1, 0, 2];
var question;
var answer1;
var answer2;
var answer3;
var answer4;
var difficulty;
var diff = 'easy';
var answered = true;
var win = 0;
var moveType = -1;
var answerArray = [answer1, answer2, answer3, answer4];
var fA = [a, b, c, d];
var dieRoll = 0;

var gB = new button(6 * 32 - (4 + 2) * 20/ 4, 12 * 32 / 6 * 2, 'play', 20, function(){sM.changeState(gS); sM.click = gS.click; difficulty.show();});
var mBg = new button(12 * 32 - (4 + 2) * 20/ 2, 17 * 32 - 30, 'back', 20, function(){sM.changeState(mS); sM.click = mS.click; difficulty.hide();});
var mB = new button(0, 0, 'back', 20, function(){
  sM.changeState(mS);
  sM.click = mS.click;
  
  qV.hide();
  prev.hide();
  next.hide();
  addQB.hide();
  removeQB.hide();
  saveQB.hide();
  
  aB[0].hide();
  aB[1].hide();
  aB[2].hide();
  aB[3].hide();
  
  aV[0].hide();
  aV[1].hide();
  aV[2].hide();
  aV[3].hide();
  
  pN.hide();
});

var eB = new button(6 * 32 - (4 + 2) * 20/ 4, 12 * 32 / 6 * 3, 'edit', 20, function(){
  sM.changeState(eS); 
  sM.click = eS.click;
  
  qV.show();
  prev.show();
  next.show();
  addQB.show();
  removeQB.show();
  saveQB.show();
  
  aB[0].show();
  aB[1].show();
  aB[2].show();
  aB[3].show();
  
  aV[0].show();
  aV[1].show();
  aV[2].show();
  aV[3].show();
  
  pN.show();
});



var eS = new state(function(){
  textSize(13);
  if(height === 12 * 32){
    resizeCanvas((4 + 2) * 20/ 2, 30);
  }
  background(51);
  mB.tick();
  mB.show();
}, function(){
  mB.click();
});

var mS = new state(function(){
  textSize(13);
  if(height !== 12 * 32){
    resizeCanvas(12 * 32, 12 * 32);
  }
  background(51);
  gB.tick();
  gB.show();
  
  eB.tick();
  eB.show();
}, function(){
  gB.click();
  eB.click();
});

function setup() {
  createCanvas(12 * 32, 12 * 32);
  tileWidth = 32;
  
  qM();
  
  bk = loadImage('BK.png');
  
  tileImgs[0] = loadImage('again.png');
  tileImgs[1] = loadImage('back.png');
  tileImgs[2] = loadImage('norm.png');
  
  tileType = [255, color(0, 255, 0, 1), color(0, 255, 0), color(255, 0, 0)];
  
  butn = new button(0, 32 * 12, "roll die", 20, function(){
    if(answered){
      
      questionNum = ceil(random() * questions.length) - 1;
      
      question = createP(questions[questionNum]);
      
      for(var i = 0; i < 4;i++){
        answerArray[i] = createButton(answers[questionNum][i]);
        
        answerArray[i].mousePressed(fA[i]);
        
        moveNum = floor(random() * 5) + 1;
        dieRoll = moveNum;
      }
      answered = false;
    }
  });
  
  for(var i = 0; i < levelsData.length;i++){
    addLevelData(levelsData[i]);
  }
  
  level = new level();
  
  difficulty = createButton('change to medium');
  difficulty.mousePressed(difficultyChange);
  difficulty.hide();
}

function draw() {
  sM.run();
}

function mousePressed(){
  sM.click();
}

var gS = new state( function(){textSize(20);
  if(height !== 17 * 32){
    resizeCanvas(12 * 32, 17 * 32);
  }
  background(255);
  
  if(moveNum !== 0 && moveType === 0){
    level.player.move();
  }
  
  if(moveNum !== 0 && moveType === 1){
    level.bot.move();
  }
  
  image(bk, 0, 0);
  
  level.show();
  
  butn.tick();
  butn.show();
  
  fill(0, 255, 0);
  rect(20 * 4 + 25, 32 * 12 + 5, 16, 16);
  
  fill(255, 0, 0);
  rect(20 * 4 + 25, 32 * 12 + 10 + 16, 16, 16);
  
  fill(0, 0, 255);
  rect(20 * 4 + 25, 32 * 12 + 15 + 32, 16, 16);
  
  fill(0);
  text("= again", 32 * 4, 32 * 12 + 16);
  text("= back 2", 32 * 4, 32 * 12 + 5 + 32);
  text("= normal", 32 * 4, 32 * 12 + 10 + 32 + 16);
  
  textSize(20);
  if(moveType === 0){
    text("you have " + moveNum + " moves left", 0, 16 * 32);
  }else if(moveType === 1){
    text("the bot has " + moveNum + " moves left", 0, 16 * 32);
  }
  
  textSize(20);
  text("difficulty:" + diff, 7 * 32, 13 * 32 - 17);
  
  textSize(40);
  if(moveNum !== 0 && moveType === -1){
    text("roll:" + dieRoll, 0, 14 * 32);
  }else{
    dieRoll = 0;
  }
  if(win === 1){
    textSize(40);
    fill(0,0,0,255 / 2);
    rect(0, 0, width, 32 * 12);
    fill(255);
    text("you win!", 32 * 5 - 40, 32 * 6 + 10);
    textSize(20);
  }else if(win === -1){
    textSize(40);
    fill(0,0,0,255 / 2);
    rect(0, 0, width, 32 * 12);
    fill(255);
    text("you lose!", 32 * 5 - 55, 32 * 6 + 10);
    textSize(20);
  }
  textSize(13);
  mBg.tick();
  mBg.show();
  
}, function(){
   if(win !== 0){
    win = 0;
    level.reset();
  }
  
  butn.click();
  mBg.click();
});

function a(){
  if(correctAnswer[questionNum] === 0){
    moveType = 0;
  }else{
    moveNum = floor(random() * 9) + 1;
    moveType = 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function b(){
  if(correctAnswer[questionNum] === 1){
  moveType = 0;
  }else{
    moveNum = floor(random() * 9) + 1;
    moveType = 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function c(){
  if(correctAnswer[questionNum] === 2){
  moveType = 0;
  }else{
    moveNum = floor(random() * 9) + 1;
    moveType = 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function d(){
  if(correctAnswer[questionNum] === 3){
    moveType = 0;
  }else{
    moveNum = floor(random() * 9) + 1;
    moveType = 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function difficultyChange(){
  diff = 'medium'
  difficulty.remove();
  difficulty = createButton('change to hard');
  difficulty.mousePressed(difficultyChangeA);
  difficulty.position(0, 17 * 32);
}

function difficultyChangeA(){
  diff = 'hard'
  difficulty.remove();
  difficulty = createButton('change to easy');
  difficulty.mousePressed(difficultyChangeB);
  difficulty.position(0, 17 * 32);
}

function difficultyChangeB(){
  diff = 'easy'
  difficulty.remove();
  difficulty = createButton('change to medium');
  difficulty.mousePressed(difficultyChange);
  difficulty.position(0, 17 * 32);
}

var sM = new stateManager(mS);