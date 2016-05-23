//Vérifie si les sorts sont achetables ou pas
function check_spells(){
	if(exp>=10){
		$("#spell0").removeClass('hidden');
	}

	if(exp>=100){
		$("#spell1").removeClass('hidden');
	}
}

//Calcule les dégâts d'un sort en fonction de son niveau et sa qualité
function calcul_damages_spells(index){
	var s = tab_spells[index];
	var qs = tab_qs[index];
	s.DPS = prettify((s.BASE*(1+(0.1*(s.LEVEL-1))))*Math.pow(1.1,qs.NB_Q));
}

//Augmente la qualité d'un sort
function upgrade_quality_spell(index){
	var s = tab_spells[index];
	var qs = tab_qs[index];
	//Augmente la qualité et recalcule les dommages
	qs.NB_Q=qs.NB_Q+1;
	dps = dps - s.DPS;
	calcul_damages_spells(index);
	dps = dps + s.DPS;
	//Paie le montant requis et augmente le prix
	sold(qs.PRICE);
	qs.PRICE=Math.ceil(qs.PRICE*1.15);
	//Modifie le texte du champ associé
	$("#qs"+index).html("Quality +"+ eval(qs.NB_Q+1) +" : " + price(qs.PRICE));// + " Wisdom Scrolls");
	$("#dps").html(dps);
	if(qs.NB_Q>19){
		$("#qs"+index).html("Maximum Quality (20%)");
		$("#qs"+index).addClass('disabled');
	}
}

//Augmente le niveau d'un sort
function upgrade_level_spell(index){
	var s = tab_spells[index];
	var qs = tab_qs[index];
	//Augmente le niveau et recalcule les dommages
	s.LEVEL=s.LEVEL+1;

	if(s.LEVEL==1){
		dps = dps + s.DPS;
		$("#qs"+index).removeClass('hidden');
		if(check_buyouts_quality(qs.PRICE,"qs"+index)){
			$("#qs"+index).removeClass('disabled');
		}
	}else{
		dps = dps - s.DPS;
		calcul_damages_spells(index);
		dps = dps + s.DPS;
	}

	//Paie le montant requis et augmente le prix
	sold(s.PRICE);
	s.PRICE=Math.ceil(s.PRICE*1.15);

	//Modifie le texte du champ associé
	$("#spell"+index).html(s.NAME+" level "+ (s.LEVEL+1) +" : " + price(s.PRICE));// + " Wisdom Scrolls");
	$("#dps").html(dps);
}