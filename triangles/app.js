// https://stackoverflow.com/questions/7694323/css3-animation-on-hover-force-entire-animation
$(".box").bind(" animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".box").hover(function(){
    $(this).addClass("animated");        
  })

  $(".box2").bind(" animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".box2").hover(function(){
    $(this).addClass("animated");        
  })
  $(".a").bind(" animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".a").hover(function(){
    $(this).addClass("animated");        
  })

  $(".b").bind(" animationend", function(){
    $(this).removeClass("animated")  
  })
  
  $(".b").hover(function(){
    $(this).addClass("animated");        
  })

  // TO CLONE COPIES OF SECTION
//   for(let i =0; i <5; i++){
// $(".section").clone().appendTo("#container2")
// }

