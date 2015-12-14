self.message = calc;
function calc(event)
{
	for(var i=0;i<100000000;i++) var k=i+10;
	postMessage("done")
}