$("#btn").click(function(){
    $.getJSON("https://random.cat/meow")
    .done(function(data){
      $('#catImg').attr("src", data.file);
    })
    .fail(function(){
      alert("REQUEST IS NOT PAWSIBBLE");
    })
  })