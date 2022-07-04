var phrase = $(".phrase").text();
var numOfWords = phrase.split(" ").length;
var phraseLength = $("#phraseLength");

phraseLength.text(numOfWords);

var area = $(".typingArea");
area.on("input", function () {
  var content = area.val();
  var wordsAmount = content.split(/\S+/).length - 1;
  $("#wordAmount").text(wordsAmount);
  var lettersAmount = content.length;
  $("#letterAmount").text(lettersAmount);
});

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

$("#refreshButton").click(function () {
  area.attr("disabled", false);
  
});
