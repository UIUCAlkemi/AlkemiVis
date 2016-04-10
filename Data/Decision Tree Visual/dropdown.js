
var list = document.getElementById("jsonDropDown"); 

for (var i = 0; i < 2; i++){                
    var li = document.createElement("li");
    var link = document.createElement("a");             
    var text = document.createTextNode("Hello");
    link.appendChild(text);
    link.href = "#";
    li.appendChild(link);
    list.appendChild(li);
  }
