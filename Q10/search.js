function search()
{
	text = $("#s").val();
	$.ajax({
		url : "http://localhost/Labs/Q10/search.php?s="+text,
		method : "GET",
		dataType: "xml",
		success : parse
	});
}
function parse(xmldom)
{
	
	//alert("here")
	items = xmldom.getElementsByTagName("item");
	s = ""
	for (var i=0;i<items.length;i++)
	{
		link = items[i].getElementsByTagName("link")[0].innerHTML;
		title = items[i].getElementsByTagName("title")[0].innerHTML;

		s += "<a href='"+link+"'>"+title+"</a>"
	}
	//alert(s)
	$("#o").html(s)
}