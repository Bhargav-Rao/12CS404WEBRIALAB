function search()
{
	text = $("#s").val();
	$.ajax({
		url : "http://localhost/Labs/Q12/crickt.php?c="+text,
		method : "GET",
		dataType: "json",
		success : parse
	});
}
function parse(j)
{
	
	s = "<table><tr>";
	for (var i in j[0])
		s+="<th>"+i+"</th>"
	s+= "</tr>";
	for (var i = 0; i<j.length;i++)
	{
		l = j[i]
		s+= "<tr>";
		for (var k in l)
			s+="<td>"+l[k]+"</td>"
		s+= "</tr>";
	}
	s+= "</table>";
	$('#o').html(s);
}