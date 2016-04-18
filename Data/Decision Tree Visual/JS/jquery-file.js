$.ajax({
    type: 'POST',
    url: 'listing.php',
    cache: false,
    success: function(result) {
      if(result){
        resultObj = eval (result);
      }else{
        alert("error");
      }
    }
});