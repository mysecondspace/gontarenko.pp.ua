<?php
	if(isset($_REQUEST['submit'])){
		if (isset($_GET['name'])) $name = $_GET['name'];
		if (isset($_GET['email'])) $email = $_GET['email'];
		if (isset($_GET['message'])) $message = $_GET['message'];

		$subject = "$email";
		$headers = "From: Gontarenko";
		$address = "<igor.gontarenko@gmail.com>";
		$content = "$message\n\nSincerely,\n$name";
		$send = mail($address, $subject, $content, $headers);

		header('Refresh: 0; URL = /');
	};
?>
