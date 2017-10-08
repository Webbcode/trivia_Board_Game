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

var answerArray = [answer1, answer2, answer3, answer4];
var fA = [a, b, c, d];

function setup() {
  
  createCanvas(12 * 32, 16 * 32);
  tileWidth = 32;
  
  difficulty = createButton('change to medium');
  difficulty.mousePressed(difficultyChange);
  
  bk = loadImage('BK.png');
  
  tileImgs[0] = loadImage('again.png');
  tileImgs[1] = loadImage('back.png');
  tileImgs[2] = loadImage('norm.png');
  
  tileType = [255, color(0, 255, 0, 1), color(0, 255, 0), color(255, 0, 0)];
  
  butn = new button(0, 32 * 12, "roll die", 20, function(){
    
    questionNum = ceil(random() * questions.length) - 1;
    
    question = createP(questions[questionNum]);
    
    for(var i = 0; i < 4;i++){
      answerArray[i] = createButton(answers[questionNum][i]);
      
      answerArray[i].mousePressed(fA[i]);
    }
    
    
  });
  
  for(var i = 0; i < levelsData.length;i++){
    addLevelData(levelsData[i]);
  }
  
  level = new level();
}

function draw() {
  background(51);
  
  if(moveNum !== 0){
    level.player.move();
  }
  
  image(bk, 0, 0);
  
  level.show();
  
  butn.tick();
  butn.show();
  
}

function mousePressed(){
  butn.click();
}

function a(){
  if(correctAnswer[questionNum] === 0){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 6 + 1);
    }
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
}

function b(){
  if(correctAnswer[questionNum] === 1){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 6 + 1);
    }
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
}

function c(){
  if(correctAnswer[questionNum] === 2){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 6 + 1);
    }
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
}

function d(){
  if(correctAnswer[questionNum] === 3){
    for(var i = 0; i < round(random() * 50);i++){
      moveNum = floor(random() * 6 + 1);
    }
  }
  for(var i = 0; i < 4;i++){
      answerArray[i].remove();
  }
  question.remove();
}

function difficultyChange(){
  if(diff = 'easy'){
    diff = 'medium'
    difficulty.remove();
    difficulty = createButton('change to hard');
    difficulty.mousePressed(difficultyChange);
  }else if(diff = 'medium'){
    diff = 'hard'
    difficulty.remove();
    difficulty = createButton('change to easy');
    difficulty.mousePressed(difficultyChange);
  }else{
    diff = 'easy'
    difficulty.remove();
    difficulty = createButton('change to medium');
    difficulty.mousePressed(difficultyChange);
  }
}