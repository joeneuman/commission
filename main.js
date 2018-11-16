function updateAreaValue() {
  var free = document.getElementById('freeSlider').value;
  var percent = document.getElementById('percentSlider').value;
  var month = document.getElementById('monthSlider').value;
  var trans = document.getElementById('transactionSlider').value;
  var cap = document.getElementById('capSlider').value;
  (cap).toLocaleString('en') 
  var num = document.getElementById('numSlider').value;
  var avGci = document.getElementById('avGciSlider').value;



  var freeN
  if (free <= 1) {
    freeN = free * -50
  } else {
    freeN = free * -70
  }

  var percentN
  percentN = percent * 20

  var monthN = month * .2

  var transN
  if (trans <= 100) {
    transN = 0;
  } else {
    transN = trans * .2
  }
  var capN
  if (cap >= 12000) {
    capN = 0;
  } else {
    if (cap >= 11000) {
      capN = -5;
    } else {
      if (cap >= 10000) {
        capN = -20;
      } else {
        if (cap >= 9000) {
          capN = -30;
        } else {
          if (cap >= 8000) {
            capN = -40;
          }
        }
      }
    }
  }


  var bal = freeN + percentN + monthN + transN + capN;
  document.getElementById('balValue').innerHTML = bal;

  var gci = num * avGci;
  document.getElementById('gciValue').innerHTML = gci;

  var total = percent / 100 * gci + 12 * month + trans * num;

  var perc 
  if (total < cap) {
    perc = total / gci *100;
  } else {
    perc = cap / gci *100
  }
  
  document.getElementById('percValue').innerHTML = perc;

  
}


function freeSliderChange(val) {
  document.getElementById('freeValue').innerHTML = val;
  updateAreaValue();
}

function percentSliderChange(val) {
  document.getElementById('percentValue').innerHTML = val;
  updateAreaValue();
}

function monthSliderChange(val) {
  document.getElementById('monthValue').innerHTML = val;
  updateAreaValue();
}

function transactionSliderChange(val) {
  document.getElementById('transactionValue').innerHTML = val;
  updateAreaValue();
}

function capSliderChange(val) {
  document.getElementById('capValue').innerHTML = val;
  updateAreaValue();
}

function numSliderChange(val) {
  document.getElementById('numValue').innerHTML = val;
  updateAreaValue();
}

function avGciSliderChange(val) {
  document.getElementById('avGciValue').innerHTML = val;
  updateAreaValue();
}




         /*
         'use strict';


var numT=inputs.a
var numFree=inputs.b*-50;

var percent
if(inputs.e<=0){
  percent=0;
} else {
if(inputs.e<=5){
  percent=50;
} else {
if(inputs.e>=10){
  percent=inputs.e*10
}}}

var monthly=inputs.c* .2;

var perTrans;
if(inputs.d<=100){
  perTrans = 0;
} else {
  perTrans = inputs.d*.2
}

var cap;
if(inputs.f>=12000){
  cap=0;
} else {
if(inputs.f>=11000) {
  cap=-10;
} else {
if(inputs.f>=10000) { 
  cap=-20;
} else {
if(inputs.f>=9000) {
  cap=-30;
} else {
if(inputs.f>=8000) {
  cap=-40;
}}}}}

var gciAdj=numT*5000-inputs.b*5000;
var paidGd;
if(paidGd>=cap) {
 paidGd=cap;
} else {
paidGd=inputs.e*numT+12*inputs.c+numT*inputs.d;
}




return {
  
  max: numFree + percent + perTrans + monthly + cap,
  gci: numT*5000,
  percentPaid: "?",
  
  
} */