// Custom jQuery

// toggle article content
$(".expand").click(function( event ){
  $(event.currentTarget).parent().prev().slideToggle(400);
  $(this).text(function(i, text) {
    return text === "Close" ? "More info" : "Close";
  });
});
