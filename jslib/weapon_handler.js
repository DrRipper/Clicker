//Vérifie si les armes sont achetables ou pas
function check_weapons(){
	if(exp>=10){
		$("#weapon0").removeClass('hidden');
	}

	if(exp>=100){
		$("#weapon1").removeClass('hidden');
	}

	if(exp>=1000)
		$('#weapon2').removeClass('hidden');

	if(exp>=10000)
		$('#weapon3').removeClass('hidden');

	if(exp>=100000)
		$('#weapon4').removeClass('hidden');
}

//Calcule les dégâts d'une arme en fonction de son niveau et sa qualité
function calcul_damages_weapons(index){
	var w = tab_weapons[index];
	var qw = tab_qw[index];
	w.DAMAGES = prettify((w.BASE*(1+(0.1*(w.LEVEL-1))))*Math.pow(1.1,qw.NB_Q));
}

//Augmente la qualité d'une arme
function upgrade_quality_weapons(index){
	var w = tab_weapons[index];
	var qw = tab_qw[index];
	//Augmente la qualité et recalcule les dommages
	qw.NB_Q=qw.NB_Q+1;
	damages = damages - w.DAMAGES;
	calcul_damages_weapons(index);
	damages = damages + w.DAMAGES;
	//Paie le montant requis et augmente le prix
	sold(qw.PRICE);
	qw.PRICE=Math.ceil(qw.PRICE*1.15);
	//Modifie le texte du champ associé
	$("#qw"+index).html("Quality +"+ eval(qw.NB_Q+1) +" : " + price(qw.PRICE));// + " Wisdom Scrolls");
	$("#damages").html(damages);
	if(qw.NB_Q>19){
		$("#qw"+index).html("Maximum Quality (20%)");
		$("#qw"+index).addClass('disabled');
	}
}

//Augmente le niveau d'une arme
function upgrade_level_weapon(index){
	var w = tab_weapons[index];
	var qw = tab_qw[index];
	//Augmente le niveau et recalcule les dommages
	w.LEVEL=w.LEVEL+1;

	if(w.LEVEL==1){
		damages = damages + w.DAMAGES;
		$("#qw"+index).removeClass('hidden');
		if(check_buyouts_quality(qw.PRICE,"qw"+index)){
			$("#qw"+index).removeClass('disabled');
		}
	}else{
		damages = damages - w.DAMAGES;
		calcul_damages_weapons(index);
		damages = damages + w.DAMAGES;
	}

	//Paie le montant requis et augmente le prix
	sold(w.PRICE);
	w.PRICE=Math.ceil(w.PRICE*1.15);

	//Modifie le texte du champ associé
	$("#weapon"+index).html(w.NAME+" level "+ (w.LEVEL+1) +" : " + price(w.PRICE));// + " Wisdom Scrolls");
	$("#damages").html(damages);
}
