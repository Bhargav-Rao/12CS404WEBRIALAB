function validate()
{
	USN = $("#USN").val();
	f2 = parent.document.getElementById('f2');
	f2.src = "http://localhost/Labs/Q3/school.php?USN="+USN;
}
function display(data)
{
	$('#aut').html(data);
}