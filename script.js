document.getElementById("yes").addEventListener("mouseover", function(){
  var buttonWidth = this.offsetWidth;
  var buttonHeight = this.offsetHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  this.style.top = Math.random() * (windowHeight - buttonHeight) + 'px';
  this.style.left = Math.random() * (windowWidth - buttonWidth) + 'px';
  this.style.position = "absolute";
});

document.getElementById("no").addEventListener("click", function(){
  document.getElementById("image").style.display = "block";
});
