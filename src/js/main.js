// Custom jQuery

// headroom.js
$(".fixed-top").headroom({
  "offset": 200,
  "tolerance": 5
});

// scrollspy smooth scrolling
$("body").scrollspy({target: ".navbar", offset: 75});
$("#collapsibleNavbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// toggle article content
$(".expand").click(function( event ){
  $(event.currentTarget).parent().prev().slideToggle(400);
  $(this).text(function(i, text) {
    return text === "Close" ? "More info" : "Close";
  });
});
