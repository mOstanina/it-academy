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
$(".fa-angle-down").click(function(){
    $("#sub-menu").css("display", "block");
    $(this).css("display", "none");
    $(".fa-angle-up").css("display", "inline-block");
})
$(".fa-angle-up").click(function(){
    $("#sub-menu").css("display", "none");
    $(this).css("display", "none");
    $(".fa-angle-down").css("display", "inline-block");
})