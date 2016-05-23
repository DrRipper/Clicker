<?php
header('Content-Type: application/json; charset=utf-8');

/*if(!isset($_SESSION['id_salarie']) && $_SESSION['admin']==0){
        header('Location:../logout.php');
}*/
require('../db_connect.php');
$bdd = db_connect();

if(isset($_POST['index_mob']) && $_POST['index_mob'] != ''){
  $sql = 'SELECT * FROM mobs WHERE id_mob='.$_POST['index_mob'];
  $result = $bdd->query($sql);
  $data = $result->fetch(PDO::FETCH_ASSOC);
  echo json_encode($data);
}

else{
	$sql = 'SELECT * FROM mobs';
	$result = $bdd->query($sql);
	$data = $result->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($data);
}

?>
