$(document).ready(init)
function init () 
{
	images = ['1.jpg','2.jpg','3.jpg','4.jpg']	
	pointer = 1;
}
function next()
{
	pointer+=1
	if(pointer==(images.length)) $('#n').css({"visibility":"hidden"})
	if(pointer!=1) 				 $('#p').css({"visibility":"visible"})
	display()
}
function prev()
{
	pointer-=1
	if(pointer==1) 				 $('#p').css({"visibility":"hidden"})
	if(pointer!=(images.length)) $('#n').css({"visibility":"visible"})
	display()	
}
function display()
{
	$('#i').animate({'width':'0px'},500,function(){
		$('#i').attr("src",images[pointer-1])
		$('#i').css("float","right")
		$('#i').animate({'width':'300px'},500,function(){
			$('#i').css("float","left")
		});
	});
}