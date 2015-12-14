$(document).ready(init)
function init () 
{
	div = document.getElementById('n')
	$.ajax(
	{
		url:"http://localhost/Labs/Q9/scroll.php",
		method:"GET",
		dataType:'xml',
		success:parse,
	}
	)
}
function parse(xmldom)
{
	items = xmldom.getElementsByTagName("item");
	var s = ''
	for (var i=0;i<items.length;i++)
	{
		var link = items[i].getElementsByTagName("link")[0].innerHTML;
		var title = items[i].getElementsByTagName("title")[0].innerHTML;
		s+="<a href='"+link+"'>"+title+"</a>&nbsp;&nbsp;"
	}
	scroll(s)
}
function scroll(s)
{
	span = document.createElement('span');
	span.className = "s";
	span.innerHTML = s;
	div.appendChild(span)
	span = $(".s")	
	span.css({position:'relative',left:window.innerWidth+"px"})
	span.bind("mouseenter",stop)
	span.bind("mouseleave",animate)
	timer = setTimeout(move, 10, window.innerWidth);
}
function move(pos)
{
	span.css({left:pos+"px"})
	pos = pos-1
	if (pos+document.getElementsByClassName('s')[0].offsetWidth == 0) 
		pos = window.innerWidth ;
	timer = setTimeout(move, 10, pos);
}
function stop()
{
	clearTimeout(timer)
}
function animate()
{

	timer = setTimeout(move, 10, $(".s").offset().left-20);
}
