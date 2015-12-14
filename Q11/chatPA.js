function init()
{
	document.getElementById('s').addEventListener("keypress",start);
	ev = new EventSource("http://localhost/Labs/Q11/chatSA.php");
	div = document.getElementById('o')
	ev.addEventListener('message',display)
}
function display(event)
{
	div.innerHTML+="<span class='m'>B: "+event.data+"</span>"
}
function start(event)
{
	if(event.keyCode==13)
	{
		data = document.getElementById('s').value
		
		$.ajax({
			url:"http://localhost/Labs/Q11/chatPA.php?q="+data,
			method:"GET",
		})
		div.innerHTML+="<span class='m'>A: "+data+"</span>"
		
	}
}