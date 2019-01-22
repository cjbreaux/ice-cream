$(document).ready(function(){
  var chrisIces = ["chocolate", "vanilla", "pumpkin"]
  var mattIces = ["mint","cookie-dough","chocolate"]

  chrisIces.forEach(function(chrisIce){
    $("#chrisList").append("<li>" + chrisIce + "</li>")
  });
  mattIces.forEach(function(iceCream){
    console.log("<img src='img/" + iceCream +".jpeg'");
    $("#mattList").append("<img src='img/" + iceCream +".jpeg'>")
  });
  // test selectors later
  $("p").click(function(){
    $("#chrisList").toggle();
  });
});
