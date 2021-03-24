$(".fa-plus-circle").click(function(){
    $(".accordion-body").css("display", "block");
    $(this).css("display", "none");
    $(".fa-minus-circle").css("display", "block");
})
$(".fa-minus-circle").click(function(){
    $(".accordion-body").css("display", "none");
    $(this).css("display", "none");
    $(".fa-plus-circle").css("display", "block");
})