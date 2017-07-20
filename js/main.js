var breakTime = 5;
var sessionTime = 20;
var stepType = ["Session", "Break"];
var stopped = true;
var intervalPom;
var intervalTime = sessionTime;


$("#breakP").text("Break time : " + breakTime);
$("#sessionP").text("Session time : " + sessionTime);
$("#step").text(stepType[0]);
$("#chronoP").text(formatTime(sessionTime));

$(".breakbtn").click(function() {
  if (stopped) {
    if ($(".breakbtn").index(this) == 0 && breakTime != 1) {
      breakTime--;
    } else if ($(".breakbtn").index(this) == 1) {
      breakTime++;
    }
    $("#breakP").text("Break time : " + breakTime);
  }
});

$(".sessionbtn").click(function() {
  if (stopped) {
    if ($(".sessionbtn").index(this) == 0 && sessionTime != 1) {
      sessionTime--;
    } else if ($(".sessionbtn").index(this) == 1){
      sessionTime++;
    }
    $("#sessionP").text("Session time : " + sessionTime);
  }
});

$(".chrono").click(function() {
  if (stopped) {
    stepType[0] == "Session" ? intervalTime = sessionTime : intervalTime = breakTime;
    intervalPom = setInterval(chronoPomo, 1000);
    stopped = false;
  } else {
    stopped = true;
    clearInterval(intervalPom);
  }
});

function chronoPomo() {
  if (intervalTime) {
    intervalTime--;
    $("#chronoP").text(formatTime(intervalTime));
  }
  else {
    stepType.push(stepType.shift());
    stepType[0] == "Session" ? intervalTime = sessionTime : intervalTime = breakTime;
    $("#step").text(stepType[0]);
    $("#chronoP").text(formatTime(intervalTime));
  }
}


function formatTime(fTime) {
  fTime = ("0" + Math.floor(intervalTime / 60)).slice(-2) + " : " + ("0" + intervalTime % 60).slice(-2);
  return fTime;
}
