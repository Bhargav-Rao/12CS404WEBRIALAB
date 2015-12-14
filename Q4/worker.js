self.onmessage = calcul
function calcul(event)
{
	console.log(event.data)
	for(var i=0;i<1000000000;i++)
	{
		var x = i + 10;
	}
	postMessage("Done")
}