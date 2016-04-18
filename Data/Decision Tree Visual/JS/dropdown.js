
var list = document.getElementById("jsonDropDown"); 
$.ajax({
    type: 'POST',
    url: 'listing.php',
    cache: false,
    success: function(result) {
      if(result){
        resultObj = eval (result);
        for (var i = 0; i < resultObj.length; i++){                
		    var li = document.createElement("li");
		    var link = document.createElement("a");             
		    var text = document.createTextNode(resultObj[i]);
		    link.appendChild(text);
		    link.href = "#";
		    li.appendChild(link);
		    list.appendChild(li);
		  }
      }else{
        alert("error");
      }
    }
});

