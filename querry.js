var star = ["", "#star1", "#star2", "#star3", "#star4", "#star5"];
var vote = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor&rating=";

$("#star1").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
    });
$("#star2").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
    });
$("#star3").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
    });
$("#star4").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
    });
$("#star5").hover(function(){
        $("#star1").css("-webkit-filter", "grayscale(0%)");
        $("#star2").css("-webkit-filter", "grayscale(0%)");
        $("#star3").css("-webkit-filter", "grayscale(0%)");
        $("#star4").css("-webkit-filter", "grayscale(0%)");
        $("#star5").css("-webkit-filter", "grayscale(0%)");
        }, function(){
        $("#star1").css("-webkit-filter", "grayscale(100%)");
        $("#star2").css("-webkit-filter", "grayscale(100%)");
        $("#star3").css("-webkit-filter", "grayscale(100%)");
        $("#star4").css("-webkit-filter", "grayscale(100%)");
        $("#star5").css("-webkit-filter", "grayscale(100%)");
    });

$('#star1').click(function() {
   votes(1);
});
$('#star2').click(function() {
   votes(2);
});
$('#star3').click(function() {
   votes(3);
});
$('#star4').click(function() {
   votes(4);
});
$('#star5').click(function() {
   votes(5);
});


function votes(i){

        
    $.ajax({
        method: "GET",
        url:  vote+""+i,
        success: function(data) {
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor",
                success: function(data) {
                    $('#votes').text(data.votes+" röster");
                    $('#ranking').text(data.rating.toFixed(2)+" i snitt.");
                }, 
            });       
        }, 
    });
};

$(document).ready ( function(){
    
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=51b73eb45ead826a&recipe=protein_pankakor",
        success: function(data) { 
            $('#votes').text(data.votes+" röster");
            $('#ranking').text(data.rating.toFixed(2)+" i snitt.");
        },     
    });
});