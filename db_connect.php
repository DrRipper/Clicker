<?php
header('Content-Type: text/html; charset=utf-8');
function db_connect() {
	try{
		$pdo_options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
		return $bdd = new PDO('mysql:host=127.0.0.1;dbname=test_g', 'root', '', $pdo_options);
	}
	catch (Exception $e)
	{
			die('Erreur : ' . $e->getMessage());
	}
}
?>
