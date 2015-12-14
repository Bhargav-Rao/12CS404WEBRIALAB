function init()
{
	canv = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	x1 = 10;
	y1 = 10;
	x2 = 290;
	y2 = 10;
	d1 = +1;
	d2 = +1;
	d3 = -1;
	d4 = -1;
	bounce();
}
function bounce()
{
	canvas.width=canvas.width
	drawBall(x1,y1,'red')
	drawBall(x2,y2,'blue')

	x1+=d1*1;y1+=d2*1
	x2+=d3*1;y2-=d4*1

	if(Math.floor(Math.sqrt((x2-x1)*(x2-x1)-(y2-y1)*(y2-y1))) == 10) {d1*=-1;d3*=-1}
	//console.log(Math.sqrt((x2-x1)*(x2-x1)-(y2-y1)*(y2-y1)))
	if (x1==290 || x1==10 ) d1*=-1;
	if (y1==290 || y1==10 ) d2*=-1;
	if (x2==290 || x2==10 ) d3*=-1;
	if (y2==290 || y2==10 ) d4*=-1;

	timer = setTimeout(bounce,10)
}
function drawBall(x,y,c)
{
	ctx.fillStyle = c;
	ctx.beginPath();
	ctx.arc(x,y,10,0,Math.PI*2);
	ctx.fill();
}
function calculate()
{
	for(var i=0;i<100000000;i++) 
		k=i+10;
	display("calculated")
}
function display(d)
{
	$('#d').html(d);
}
function calcworker()
{
	worker = new Worker("worker.js");
	worker.onmessage= function(event){display(event.data);};
	worker.postMessage("Hi")
}
