//  funtion to delete all list
function del() {
  alert("Deleting All");
  var ul = document.getElementById("display");
  ul.style.display = "none";

}


// // close button 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Function to show Output
function show() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("name").value;
  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("display").appendChild(li);
  }
  document.getElementById("name").value = "";

  var pic = document.createElement("img");
  pic.className = "close"
  pic.setAttribute("src", "images/del-icon.png");
  li.appendChild(pic);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}