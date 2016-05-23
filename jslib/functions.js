
//Gère la sauvegarde
function save_game(){
	var nb_kills = [];
	for ( mob of tab_mobs){
		nb_kills.push(mob.NB_KILL);
	}

	var weapons = [];
	for ( weapon of tab_weapons){
		weapons.push(weapon.LEVEL);
	}

	save_file = {
		exp: exp,
		nb_wisdoms: nb_wisdoms,
		nb_alterations: nb_alterations,
		nb_armourer_scraps : nb_armourer_scraps,
		mobs: nb_kills,
		weapons: weapons
	}
	localStorage.setItem("save_file", JSON.stringify(save_file));
}

//Gère le chargement de la sauvegarde
function load_save(){
	if(localStorage.getItem("save_file") != null)
	{
		var savegame = JSON.parse(localStorage.getItem("save_file"));

		if (typeof savegame.exp !== "undefined") exp = savegame.exp;
		if (typeof savegame.nb_wisdoms !== "undefined") nb_wisdoms = savegame.nb_wisdoms;
		if (typeof savegame.nb_alterations !== "undefined") nb_alterations = savegame.nb_alterations;
		if (typeof savegame.mobs !== "undefined"){
			for(i=0; i<savegame.mobs.length; i++){
				tab_mobs[i].NB_KILL = savegame.mobs[i];
				if(tab_mobs[i].NB_KILL>0)
					current_mob=i;
			}
		}
		if (typeof savegame.weapons !== "undefined"){
			for(i=0; i<savegame.weapons.length; i++){
				tab_weapons[i].LEVEL = savegame.weapons[i];
			}
		}

		reload_mob();
		check_currencies();
		check_mobs();
		check_weapons();
		$("#compteurExp").html('').append(exp);
	}
	else
		alert('Pas de sauvegarde');
}

//Gère la suppression de la sauvegarde
function delete_save(){
	localStorage.removeItem("save_file");
}

//Transforme les currencies en celle du dessus si >100
function check_currency(currency,next){
	var countNbCurrency = 0;

	while(currency>=100){
		countNbCurrency++;
		currency=currency-100;
	}
	if(countNbCurrency>0)
		next=next+countNbCurrency;
}

function load_currencies(){
	$("#compteurScraps").html('').append(nb_armourer_scraps);
	$("#compteurScraps").trigger('change');
	$("#compteurAlterations").html('').append(nb_alterations);
	$("#compteurAlterations").trigger('change');
	$("#compteurWisdoms").html('').append(nb_wisdoms);
	$("#compteurWisdoms").trigger('change');
}

//Permet de transformer les WS en alts
function check_currencies(){
	/*check_currency(nb_wisdoms,nb_alterations);
	check_currency(nb_alterations,nb_armourer_scraps);*/
	var countNbAlts=0;
	var countNbScraps=0;

	while(nb_wisdoms>=100){
		countNbAlts++;
		nb_wisdoms=nb_wisdoms-100;
		//check_currencies();
	}
	if(countNbAlts>0){
		nb_alterations=nb_alterations+countNbAlts;
	}

	while(nb_alterations>=100){
		countNbScraps=countNbScraps+1;
		nb_alterations=nb_alterations-100;
		//check_currencies();
	}

	if(countNbScraps>0){
		nb_armourer_scraps=nb_armourer_scraps+countNbScraps;
	}

	load_currencies();
}

//Gère l'achat des objets en terme de currencies
function sold(value){
	var countNbAlts=0;
	var countNbScraps=0;

	while(value>10000)
	{
		countNbScraps++;
		value-=10000;
	}

	while(value>100)
	{
		countNbAlts++;
		value=value-100;
	}

	nb_armourer_scraps-=countNbScraps;
	nb_alterations-=countNbAlts;

	nb_wisdoms-=value;

	load_currencies();
}

//Disable ou non les boutons de qualité
function check_buyouts_quality(value, field){
	var total_c = 10000*nb_armourer_scraps+100*nb_alterations+nb_wisdoms;

	if(value>total_c){
		$('#'+field).addClass('disabled');
		return 0;
	}
	else{
		$('#'+field).removeClass('disabled');
		return 1;
	}
}

//Désactive ou non les boutons armes et spells
function check_buyouts(field,tab,index){
	var total_c = 10000*nb_armourer_scraps+100*nb_alterations+nb_wisdoms;

	if(tab[index].PRICE<=total_c){
		$('#'+field).removeClass('disabled');
		return 1;
	}
	else{
		$('#'+field).addClass('disabled');
		return 0;
	}
}

function prettify(value){
	return parseFloat((Math.round(value*1000000000)/1000000000).toFixed(2));
}

function price(value){
	textValue = "";
	countNbScraps = 0;
	countNbAlts = 0;

	while(value>10000){
		countNbScraps++;
		value-=10000;
	}
	if(countNbScraps>0)
		textValue += " "+countNbScraps+" armourer scraps";

	while(value>100){
		countNbAlts++;
		value-=100;
	}
	if(countNbAlts>0)
		if(countNbScraps>0)
			textValue += ","+countNbAlts+" alteration orbs";
		else
			textValue += " "+countNbAlts+" alteration orbs";

	if(value>0)
		if(countNbScraps>0 || countNbAlts>0)
			textValue += " and "+value+" wisdoms scrolls";
		else
			textValue += " "+value+" wisdoms scrolls";

	return textValue;
}