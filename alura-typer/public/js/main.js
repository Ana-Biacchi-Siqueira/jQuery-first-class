var phrase = $(".phrase").text();
var numOfWords = phrase.split(" ").length;
var phraseLength = $("#phraseLength");

phraseLength.text(numOfWords);
