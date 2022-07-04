var refreshTime = $("#typingTimer").text();
var area = $(".typingArea");

$(function () {
  refreshPhrase();
  startsAmountCount();
  startsTimer();
  $("#refreshButton").click(restartGame);
});

function refreshPhrase() {
  var phrase = $(".phrase").text();
  var numOfWords = phrase.split(" ").length;
  var phraseLength = $("#phraseLength");
  phraseLength.text(numOfWords);
}

function startsAmountCount() {
  area.on("input", function () {
    var content = area.val();
    var wordsAmount = content.split(/\S+/).length - 1;
    $("#wordAmount").text(wordsAmount);
    var lettersAmount = content.length;
    $("#letterAmount").text(lettersAmount);
  });
}

function startsTimer() {
  var timeLeft = $("#typingTimer").text();
  area.one("focus", function () {
    var timeStop = setInterval(function () {
      timeLeft--;
      $("#typingTimer").text(timeLeft);
      if (timeLeft < 1) {
        area.attr("disabled", true);
        clearInterval(timeStop);
      }
    }, 1000);
  });
}

function restartGame() {
  $("#refreshButton").click(function () {
    area.attr("disabled", false);
    area.val("");
    $("#wordAmount").text("0");
    $("#letterAmount").text("0");
    $("#typingTimer").text(refreshTime);
    startsTimer();
  });
}
