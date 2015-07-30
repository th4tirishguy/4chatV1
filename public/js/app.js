//Create socket.io
var socket = io('http://192.168.1.9:3000');

//Recieve message on socket
socket.on('chat message', function(msg) {
	console.log(msg.message + ' ' + msg.lat + ' ' + msg.lng);
	addMessageToMap(msg.message, msg.lat, msg.lng);
});

socket.on('update user count', function(count) {
	$('.number-of-users p').text('There are ' + count + ' people here');
});

var userLocation;
var map;

$(document).ready(function() {

	google.maps.event.addDomListener(window, 'load', initialize_map);
	initiate_geolocation();

	//Send message
	$('form').submit(function() {
		socket.emit('chat message', {'Message': $('#text-box').val(), 'Lat': userLocation.lat(), 'Lng': userLocation.lng()});
		$('#text-box').val('');
		console.log('Message sent');
		return false;
	});
});

//Functions

$(window).load(function() {
	set_map_height();
	set_message_box_sizing()
})
$(window).resize(function() {
	set_map_height();
	set_message_box_sizing()
})

function initialize_map() {
	var mapOptions = {
		center: {lat: 25.3815589, lng: 15.3246465},
		zoom: 3
	};
	map = new google.maps.Map(document.getElementById('map-panel'), mapOptions);
}

function set_map_height() {
	var message_box_height = $('.message-box').height();
	$('#map-panel').css({'height':(($(window).height() - message_box_height))+'px'});
}

function set_message_box_sizing() {
	var submit_button_width = $('#submit-button').width() + 40;
	$('#text-box').css({'width':(($('#text-box').width() - submit_button_width))+'px'});
}

function initiate_geolocation() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		console.log("current position: " + pos.coords.latitude + " " + pos.coords.longitude);
		setUserLocation(pos.coords.latitude, pos.coords.longitude)	
	}

	function error(err) {
		console.warn('ERROR(' + err.code + '): ' + err.message);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);
}

function setUserLocation(lat, lng) {
	userLocation = new google.maps.LatLng(lat, lng);
	console.log('User location set');
	console.log(userLocation);
}

function addMessageToMap(msg, lat, lng) {
	console.log('adding marker');
	var msgCoords = new google.maps.LatLng(lat, lng);

	var marker = new google.maps.Marker({
		position: msgCoords,
		map: map
	});
	var infoWindow = new google.maps.InfoWindow({
		content: "<div id='iw-container'><div class='iw-content'>" + msg + "</div></div>",
		maxWidth: 400,
		disableAutoPan: true
	});
	marker.setMap(map);
	infoWindow.open(map, marker);
	console.log('marker should be set');
	setTimeout(function() {
		marker.setMap(null);
		delete marker;
		delete infoWindow;
	}, 8000);
}