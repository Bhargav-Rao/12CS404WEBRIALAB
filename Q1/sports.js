function init()
{
	timer1 = setTimeout(refresh,1000);
	timval = 3000
}
function refresh()
{
	
	$.ajax({
		url : "http://localhost/Labs/Q1/sports.php",
		method : "GET",
		success : display,
		error : backoff
	});
	timer1 = setTimeout(refresh,3000);
}
function display(data)
{
	timval = 3000
	nums = data.split(';');
	$(".header").html("Rado - "+nums[0]+"; Rolex - "+nums[1]+"; Yonex - "+nums[2]+"; Wilson - "+nums[3]);
}
function update()
{
	var vals = [];
	$('.inp').each(function(index){vals.push($(this).val());})
	s = vals.join(';');
	console.log(s);
	$.ajax({
		url : "http://localhost/Labs/Q1/sports.php",
		method : "POST",
		data: {str:s},
		success: function(data){},
		error: function(data){alert("error")},

	});

}
function backoff()
{
	clearTimeout(timer1);
	var data = $(".header").html();
	timval = timval*2
	$(".header").html("retrying again in "+timval+" ms")
	timer1 = setTimeout(refresh,timval);
	setTimeout(function(data){$(".header").html(data)},1000,data)
}