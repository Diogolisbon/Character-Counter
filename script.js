document.addEventListener("DOMContentLoaded", function () {
    var textInput = document.getElementById("textInput");
    var charCount = document.getElementById("charCount");
  
    textInput.addEventListener("input", function () {
      var inputText = textInput.value;
      var count = inputText.length;
      charCount.textContent = "Character Count: " + count;
    });
  });
  