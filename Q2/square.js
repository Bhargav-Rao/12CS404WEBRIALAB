function init()
{
	var c=document.getElementById("canvas");
	ctx=c.getContext("2d");
	x = 150;
	y = 150;
	
	i = 0
	setTimeout(fill,10)

}
function fill()
{
	ctx.fillStyle="#FF0000";
	ctx.fillRect(x-i,y-i,i*2,i*2);
	ctx.stroke();
	i++;
	if(i==150) {clearTimeout(timer);i = 0;canvas.width=canvas.width;circle()}
	else timer = setTimeout(fill,10)
}
function circle()
{
	ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(x, y, i, 0, 2 * Math.PI);
    ctx.fill();
    i++;
    if(i==150) {clearTimeout(timer);i = 0;canvas.width=canvas.width;fill()}
	else timer = setTimeout(circle,10)
}
function calculate()
{
	for(var i=0;i<1000000000;i++)
	{
		var x = i + 10;
	}
	display("calculated")
}
function display(x)
{
	$("#d").html(x)
}
function webworker()
{
	var worker = new Worker("calcul.js")
	worker.postMessage('hi');
	worker.onmessage = function (event){display(event.data)};
}