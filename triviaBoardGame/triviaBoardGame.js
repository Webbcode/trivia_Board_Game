var tileWidth;
var level;
var tileType;
var tileImgs = [];
var bk;
var butn;
var moveNum = 0;
var botMoveNum = 0;
var pos = 0;
var botPos = 0;
var posPos = [];
var questions = ["how are you?"];
var answers = [["ok", "good", "horrible", "NA"]];
var questionNum = 0;
var correctAnswer = [1];
var question;
var answer1;
var answer2;
var answer3;
var answer4;
var difficulty;
var diff = 'easy';
var answered = true;
var win = 0;

var answerArray = [answer1, answer2, answer3, answer4];
var fA = [a, b, c, d];

function setup() {

  
  createCanvas(12 * 32, 16 * 32);
  tileWidth = 32;
  
  
  
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
}

function draw() {
  textSize(20);
  background(255);
  
  if(moveNum !== 0){
    level.player.move();
  }
  
  if(botMoveNum !== 0){
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
  
}

function mousePressed(){
  
  if(win !== 0){
    win = 0;
    level.reset();
  }
  
  butn.click();
}

function a(){
  if(correctAnswer[questionNum] === 0){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 7 + 1);
    }
  }else{
    botMoveNum = floor(random() * 9) + 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function b(){
  if(correctAnswer[questionNum] === 1){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 7 + 1);
    }
  }else{
    botMoveNum = floor(random() * 9) + 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function c(){
  if(correctAnswer[questionNum] === 2){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 7 + 1);
    }
  }else{
    botMoveNum = floor(random() * 9) + 1;
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
  
  answered = true;
}

function d(){
  if(correctAnswer[questionNum] === 3){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 7 + 1);
    }
  }else{
    botMoveNum = floor(random() * 9) + 1;
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
}

function difficultyChangeA(){
  diff = 'hard'
  difficulty.remove();
  difficulty = createButton('change to easy');
  difficulty.mousePressed(difficultyChangeB);
}

function difficultyChangeB(){
  diff = 'easy'
  difficulty.remove();
  difficulty = createButton('change to medium');
  difficulty.mousePressed(difficultyChange);
}
