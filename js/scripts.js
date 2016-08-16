$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var phrase = $("#puzzlephrase").val();

    var letters = phrase.split("");

    for (var index= 0; index<letters.length; index += 1) {
      if (letters[index] === "a" || letters[index] === "e" || letters[index] === "i" || letters[index] === "o" ||letters[index] === "u"){
        letters[index] = "_";
      }
    }
      phrase = letters.join("");
    $("#result").html("<h3>" + phrase + "</h3>");
  });
});
