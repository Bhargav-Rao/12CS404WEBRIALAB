function init()
{
	var myLatLng = new google.maps.LatLng(12.9342678, 77.53432629999998);

	var mapOptions = {
		center    : myLatLng,
		zoom      : 12,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('o'),mapOptions);

	new google.maps.Marker({
		position : new google.maps.LatLng(12.9247501, 77.49875709999992),
		title : "RV College of Engineering",
		map : map
	})


	$.ajax({
		url: "http://localhost/Labs/Q14/mashup.php?p=BMS",
		method:"Get",
		success: function(data){
			new google.maps.Marker({
				position: new google.maps.LatLng(12.9404973, 77.56568749999997),
				map: map,
				title: data
			})
		}
	})
}