var breakTime = 5;
var sessionTime = 20;
var stepType = ["Session", "Break"];
var stopped = true;
var firstStep = true;
var intervalPomo;
var intervalTime = sessionTime;


$("#breakP").text("Break time : " + breakTime);
$("#sessionP").text("Session time : " + sessionTime);
$("#step").text(stepType[0]);
$("#chronoP").text(sessionTime);

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
    } else if ($(".sessionbtn").index(this) == 1) {
      sessionTime++;
    }
    $("#sessionP").text("Session time : " + sessionTime);
  }
});

$(".chrono").click(function() {
  if (stopped) {
    if (firstStep) {
      intervalTime = sessionTime * 60;
      $("#chronoP").text(formatTime(intervalTime));
    }
    firstStep = false;
    stopped = false;
    intervalPomo = setInterval(chronoPomo, 1000);
    animation();
  } else {
    stopped = true;
    $(".filler").stop();
    clearInterval(intervalPomo);
  }
});

function chronoPomo() {
  if (intervalTime) {
    intervalTime--;
    $("#chronoP").text(formatTime(intervalTime));
  } else {
    stepType.push(stepType.shift());
    stepType[0] == "Session" ? intervalTime = sessionTime * 60 : intervalTime = breakTime * 60;
    $("#step").text(stepType[0]);
    $("#chronoP").text(formatTime(intervalTime));
    animation();
  }
}

function formatTime(fTime) {
  fTime = ("0" + Math.floor(fTime / 60)).slice(-2) + " : " + ("0" + fTime % 60).slice(-2);
  return fTime;
}

function animation() {
  if(stepType[0] == "Session") {
    $(".filler").css("background-color", "rgb(17, 181, 8)");
    $(".filler").animate({"width" : "35vw"}, intervalTime * 1000);

  } else {
    $(".filler").css("background-color", "rgb(247, 174, 10)")
    $(".filler").animate({"width" : "0vw"}, intervalTime * 1000);
  }
}
