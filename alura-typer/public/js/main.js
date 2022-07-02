var phrase = $(".phrase").text();
var numOfWords = phrase.split(" ").length;
var phraseLength = $("#phraseLength");

phraseLength.text(numOfWords);

var area = $(".typyingArea");
area.on("input", function(){
    var content = area.val();
    var wordsAmount = content.split(/\S+/).length - 1;
    $("#wordAmount").text(wordsAmount);
    var lettersAmount = content.length;
    $("#letterAmount").text(lettersAmount);
})