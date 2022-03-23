$(document).ready(function(){
    
    $(".swipe-card").hover(function(){
        
        var $parent = $(this).closest(".swipe-card");
        $parent.find(".swipe-card-hover").slideToggle("slow");

    });

});
