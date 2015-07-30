@extends('layouts.layout')

@section('content')
	<div id="map-panel">
	</div>
	<div class="message-box blue lighten-2">
	<form>
		<input type="text" placeholder="Enter your message..." id="text-box" class="validate">
		<button class="btn waves-effect waves-light" type="submit" name="action" id="submit-button">Submit</button>
	</form>
	</div>
@endsection