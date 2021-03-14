$(".fa-bars").click(function(){
    $("#menu").css("left", 0);
    $(this).css("display", "none");
    $(".fa-times-circle").css("display", "block");
})
$(".fa-times-circle").click(function(){
    $("#menu").css("left", "-80%");
    $(this).css("display", "none");
    $(".fa-bars").css("display", "block");
})