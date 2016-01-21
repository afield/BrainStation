$('#edit-header').text('The jQuery Challenge');

$('#box1').css('background-color','green');

$('#para1').css({'font-weight':'bold', 'font-size':'30pt'});

$('.box2').addClass('spin');

$('#button1').click(function(){
    alert("You have clicked this button!")
});


$('#box3').hover(function(){
 $(this).css('background','green');
}, function(){
    $(this).css('background','red');
});



var substring = "*";
var myInput = "";


$('#input1').keyup(function(){
   do{

        var myInput = $('#input1').val();    console.log(myInput);

}while(myInput.indexOf(substring) > -1);
    });


    
$('#box4').click(function(){
   $(this).animate({
       left:"+=400",
        top:"+=150",
		},2000), function(){
       $(this).animate({
           left:"-=400",
           top:"-=150",
       },2000);
       }
});