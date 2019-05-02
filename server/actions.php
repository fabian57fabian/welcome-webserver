<?php

	/* setta il formato di risposta */
	header('Content-Type: text/json');
	require_once("config.php");
	$action = $_POST['action'];

	/* conterrà la stringa di query al database */
	$query_string = "";

	
	/* smista secondo il tipo di richiesta */
	switch($action) {
		case "load" : 
			loadData();
		break;
	}
	
	function loadData() {
		$query_string = 'SELECT * FROM projects ORDER BY date_creation DESC';
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE); 
	
    	// esegui la query
		$result = $mysqli->query($query_string); 
	
    	$projects = array();
    
    	// cicla sul risultato
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		
			$proj_id = $row['id'];
			$proj_link = $row['link'];
			$proj_text = $row['title'];
			$proj_creator = $row['creator'];
			$proj_date = $row['date_creation'];
  
			$project = array('id' => $proj_id, 'title' =>$proj_text, 'creator' => $proj_creator, 'date' => $proj_date, 'link' => $proj_link);
			array_push($projects, $project);
		}
	
    	$response = array('projects' => $projects, 'type' => 'load');

		// encodo l'array in JSON
		echo json_encode($response);	
	
    }

?>