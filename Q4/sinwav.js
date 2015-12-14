function calcnormal()
{
	for(var i=0;i<1000000;i++)
	{
		y=i+10;
	}
	display("Calculated");
}
function calcworker()
{
	worker = new Worker("worker.js");
	worker.onmessage = function(event){display(event.data);};
	worker.postMessage("hi");
}
function display(s)
{
	$("#d").html(s);
}
function init()
{
	canv = document.getElementById("canvas");
	ctx = canv.getContext("2d");
	drawAxes();
	x = 1
	ctx.beginPath();
	ctx.moveTo(10,150);
	timer = setTimeout(sine,100);
}
function sine()
{
	sin = Math.sin;
	PI = Math.PI;
	newx = 10+x
	newy = 150+100*sin((x*PI)/50);
	
	//ctx.moveTo(newx,newy);
	ctx.lineTo(newx,newy);
	ctx.stroke();
	x+=1;
	timer = setTimeout(sine,10);
	//console.log(newx,newy)
	if(x==280) {clearTimeout(timer);x =1; canvas.width = canvas.width; init()}
}
function drawAxes()
{
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(10,290);
	ctx.moveTo(10,150);
	ctx.lineTo(290,150);
	ctx.stroke();
}