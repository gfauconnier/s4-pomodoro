var breakTime = 5;
var sessionTime = 20;
var stepType = "Session";
var stopped = true;

$("#breakP").text("Break time : " + breakTime);
$("#sessionP").text("Session time : " + sessionTime);
$("#step").text(stepType);
$("#chronoP").text(sessionTime);

$(".breakbtn").click(function() {
  if (stopped) {
    if ($(".breakbtn").index(this) == 0) {
      breakTime--;
    } else {
      breakTime++;
    }
    $("#breakP").text("Break time : " + breakTime);
  }
});

$(".sessionbtn").click(function() {
  if (stopped) {
    if ($(".sessionbtn").index(this) == 0) {
      sessionTime--;
    } else {
      sessionTime++;
    }
    $("#sessionP").text("Session time : " + sessionTime);
  }
});
