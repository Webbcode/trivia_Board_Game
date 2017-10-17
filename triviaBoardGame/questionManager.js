var qs = ["Points that do not lie on the same line are", "points that lie on the same plane are", "points not in the same plane are", "Something that cuts an object into two equal parts are", "A part of a line with two endpoints are", "A figure formed by two rays with a common endpoint is", "Basic unit of matter.", "The center of an atom which contains protons and neutrons.", "Substance consisting entirely of one type of atom.", "Substance formed by the chemical combination of two or more elements in definite proportions.", "Bond formed when one or more electrons are transferred from one atom to another.", "Bond formed by sharing electrons.", "Measurement system used to indicate the concentration of hydrogen ions in solution. Ranges from 0-14."];
var ans = [["noncolplanar", "noncollinear", "line", "planar"], ["coplanar", "noncollinear", "line", "none of these"], ["noncoplanar", "collinear", "line", "none of these"], ["perpendicular", "line", "bisector", "none of these"], ["line segment", "vector", "ray", "angle"], ["none of these", "ray", "line segment", "angle"], ["Compound", "Element", "Atom", "Ion"], ["Neucleus", "Center", "Atom", "N"], ["Element", "Atom", "Ion", "Compound"], ["Compound", "Ionic bond", "Ion", "Element"], ["Covalent bond", "Ionic bond", "Ion", "Element"], ["Covalent bond", "Ionic bond", "Ion", "Element"], ["Acid", "Base", "pH Scale", "Compound"]];
var qNum = 0;
var qAmt =  qs.length;
var aV = [];
var cA = 1;
var aB = [];
var qV;
var addQB;
var removeQB;
var saveQB;
var pN;

var qM = function(){
  qV = createInput( qs[qNum]);
  qV.position((4 + 2) * 30,0);
  
  pN = createP(qNum + "/" + (qAmt - 1)).position((4 + 2) * 57 - 1, 10);

  prev = createButton('previous question');
  prev.mousePressed(prevQ);
  prev.position((4 + 2) * 20/ 2, 0);
  
  next = createButton('next question');
  next.mousePressed(nextQ);
  next.position((4 + 2) * 57 - 1, 0);
  
  saveQB = createButton('save question');
  saveQB.mousePressed(saveQ);
  saveQB.position(206, 118);
  
  for(var i = 0;i < 4;i++){
    aB[i] = createButton('set to be correct >>>');
    aV[i] = createInput( ans[ qNum][i]);
    aV[i].position((4 + 2) * 23,30 + 22 * i);
  }
  
  aB[0].mousePressed(aa);
  aB[0].position(0,30);
  
  aB[1].mousePressed(ba);
  aB[1].position(0,52);
  
  aB[2].mousePressed(ca);
  aB[2].position(0,74);
  
  aB[3].mousePressed(da);
  aB[3].position(0,96);
  
  addQB = createButton('add question');
  addQB.mousePressed(addQ);
  addQB.position(0,118);
  
  removeQB = createButton('remove question');
  removeQB.mousePressed(removeQ);
  removeQB.position(92,118);
  
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
}

var saveQ = function(){
  questions[qNum] = qV.value();
  answers[qNum] = [aV[0].value(), aV[1].value(), aV[2].value(), aV[3].value()];
  correctAnswer[qNum] = cA;
  
  qs[qNum] = qV.value();
  ans[qNum] = [aV[0].value(), aV[1].value(), aV[2].value(), aV[3].value()];
}

var addQ = function(){
  questions[questions.length] = qV.value();
  answers[answers.length] = [aV[0].value(), aV[1].value(), aV[2].value(), aV[3].value()];
  correctAnswer[correctAnswer.length] = cA;
  
  qs[qs.length] = qV.value();
  ans[ans.length] = [aV[0].value(), aV[1].value(), aV[2].value(), aV[3].value()];
  
  qNum = qs.length - 2;
  
  qAmt++;
  
  nextQ();
}
var removeQ = function(){
  if(qAmt > 1)
  questions.splice(qNum, 1);
  answers.splice(qNum, 1);
  correctAnswer.splice(qNum, 1);
  
  qs.splice(qNum, 1);
  ans.splice(qNum, 1);
  
  qNum--;
  
  qAmt--;
  
  nextQ();
  }
}

var nextQ = function(){
  
  qNum++;
  
  if( qNum >  qs.length - 1){
     qNum = 0;
  }
  
  removeElements();
  
  pN = createP(qNum + "/" + (qAmt - 1)).position((4 + 2) * 57 - 1, 10);
  
   qV = createInput( qs[qNum]);
  qV.position((4 + 2) * 30,0);

  prev = createButton('previous question');
  prev.mousePressed(prevQ);
  prev.position((4 + 2) * 20/ 2, 0);
  
  next = createButton('next question');
  next.mousePressed(nextQ);
  next.position((4 + 2) * 57 - 1, 0);
  
  saveQB = createButton('save question');
  saveQB.mousePressed(saveQ);
  saveQB.position(206, 118);
  
  for(var i = 0;i < 4;i++){
    aB[i] = createButton('set to be correct >>>');
    aV[i] = createInput( ans[ qNum][i]);
    aV[i].position((4 + 2) * 23,30 + 22 * i);
  }
  
  aB[0].mousePressed(aa);
  aB[0].position(0,30);
  
  aB[1].mousePressed(ba);
  aB[1].position(0,52);
  
  aB[2].mousePressed(ca);
  aB[2].position(0,74);
  
  aB[3].mousePressed(da);
  aB[3].position(0,96);
  
  addQB = createButton('add question');
  addQB.mousePressed(addQ);
  addQB.position(0,118);
  
  removeQB = createButton('remove question');
  removeQB.mousePressed(removeQ);
  removeQB.position(92,118);
  
}

var prevQ = function(){
  
  qNum--;
  
  if( qNum <  0){
     qNum = qs.length - 1;
  }
  
  removeElements();
  
  pN = createP(qNum + "/" + (qAmt - 1)).position((4 + 2) * 57 - 1, 10);
  
  qV = createInput( qs[qNum]);
  qV.position((4 + 2) * 30,0);

  prev = createButton('previous question');
  prev.mousePressed(prevQ);
  prev.position((4 + 2) * 20/ 2, 0);
  
  next = createButton('next question');
  next.mousePressed(nextQ);
  next.position((4 + 2) * 57 - 1, 0);
  
  saveQB = createButton('save question');
  saveQB.mousePressed(saveQ);
  saveQB.position(206, 118);
  
  for(var i = 0;i < 4;i++){
    aB[i] = createButton('set to be correct >>>');
    aV[i] = createInput( ans[ qNum][i]);
    aV[i].position((4 + 2) * 23,30 + 22 * i);
  }
  
  aB[0].mousePressed(aa);
  aB[0].position(0,30);
  
  aB[1].mousePressed(ba);
  aB[1].position(0,52);
  
  aB[2].mousePressed(ca);
  aB[2].position(0,74);
  
  aB[3].mousePressed(da);
  aB[3].position(0,96);
  
  addQB = createButton('add question');
  addQB.mousePressed(addQ);
  addQB.position(0,118);
  
  removeQB = createButton('remove question');
  removeQB.mousePressed(removeQ);
  removeQB.position(92,118);
}

var aa = function(){
    cA = 0;
  }
  
var ba = function(){
    cA = 1;
  }
  
var ca = function(){
    cA = 2;
  }
  
var da = function(){
    cA = 3;
  }
