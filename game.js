let inputValue, flexDiv, image1;

window.onload = function() {
  
  inputValue = parseInt(document.querySelector("#inputValue").value);
  flexDiv = document.querySelector("flexContainer");
  image1 = new Image();
  image1.src = 'https://api.totallypromotional.com/Data/Media/Catalog/6/800/11d38fc4-c323-48d4-b234-93d3ccc07c5b16-oz-Plastic-Stadium-Cup-Blank-TSC102B-blue.jpg';
  
};

document.querySelector("#inputValue").onchange = function() {
  inputValue = parseInt(document.querySelector("#inputValue").value);
  flexDiv.innerHTML = "";
  for(let i = 0; i < inputValue; i++) {
    flexDiv.innerHTML += "<section class='searchObject'></section>"
  }
  
  let sections = document.querySelectorAll('.searchObject');
  sections.forEach( function(s) {
    s.width = (screen.width/inputValue) - 5;
    s.innerHTML = "<img width='" + s.width +"' src=' + image1.src + "'>";
  });
};
  

