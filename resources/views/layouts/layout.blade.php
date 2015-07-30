<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>4Chat - {{ $title }}</title>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.js"></script>
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALBdLr1Kdm2ACMyoiZS2F8NoeKhiMxRT0"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.6/socket.io.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body>

	<nav class="blue lighten-2">
		<div class="logo">
			<p>4Chat</p>
		</div>
		<div class="number-of-users">
			<p>There are 0 people here</p>
		</div>
		<!-- <ul>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul> -->
	</nav>

	@yield('content')

</body>
</html>