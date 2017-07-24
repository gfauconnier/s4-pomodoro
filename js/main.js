// GLOBAL VARIABLES DECLARATION
var breakTime = 5,
  sessionTime = 20,
  stepType = ["Session", "Break"],
  stopped = true,
  firstStep = true,
  intervalPomo,
  intervalTime = sessionTime;
// GLOBAL VARIABLES DECLARATION

// Display of default values
$("#breakP").text("Break time : " + breakTime);
$("#sessionP").text("Session time : " + sessionTime);
$("#step").text(stepType[0]);
$("#chronoP").text(sessionTime);


/**
 * description - Changes the value and display of breakTime
 *
 * @param  {type}         - no param sent
 * @return {type}           nothing to return
 */
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

/**
 * description - Changes the value and display of sessionTime
 *
 * @param  {type}         - no param sent
 * @return {type}           nothing to return
 */
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


/**
 * description - checks if the timer is stopped or not and if this is the first session then
 *                launches or stops the animation
 *
 * @param  {type}           - no param sent
 * @return {type}           nothing to return
 */
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


/**
 * chronoPomo - reduces the intervalTime by one each second until it reaches 0, then changes the stepType
 *              and relaunches the animation
 *
 * @return {type}  nothing to return
 */
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


/**
 * formatTime - formats the time sent to a 00 : 00 format
 *
 * @param  {integer} fTime the time of the actual step (session or break)
 * @return {string}       the formatted time
 */
function formatTime(fTime) {
  fTime = ("0" + Math.floor(fTime / 60)).slice(-2) + " : " + ("0" + fTime % 60).slice(-2);
  return fTime;
}


/**
 * animation - animates the div depending on the step (session or break)
 *
 * @return {type}  nothing to return 
 */
function animation() {
  if (stepType[0] == "Session") {
    $(".filler").css("background-color", "rgb(17, 181, 8)");
    $(".filler").animate({
      "width": "35vw"
    }, intervalTime * 1000);

  } else {
    $(".filler").css("background-color", "rgb(247, 174, 10)")
    $(".filler").animate({
      "width": "0vw"
    }, intervalTime * 1000);
  }
}
