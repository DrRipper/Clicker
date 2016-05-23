//Initialisation des spells, à refaire en PHP
var spell0 = { 	NAME : "Firestorm",
				DPS : 1.0,
				BASE : 1.0,
				PRICE : 10,
				LEVEL : 0};
var spell1 = { 	NAME : "Lightning Tendrils"};

var tab_spells = [spell0];

//Initialisation des qualités pour les spells
var qs0 = { PRICE : 15,
			NB_Q : 0 };

var qs1 = {};

var tab_qs = [qs0];

//Initialise les statistiques de tous les spells
//Augmenter la valeur maximale du compteur pour chaque spell rajouté
//Valeurs de multiplication / soustraction modifiables
function init_spells(){
	for(var cpt=1;cpt<2;cpt++){
		var name="spell"+cpt;
		var previous = "spell"+(cpt-1);

		eval(name).DPS=(eval(previous).DPS)*5-2*cpt;
		eval(name).BASE=eval(name).DPS;
		eval(name).PRICE=(eval(previous).PRICE)*5;
		eval(name).LEVEL=0;

		var qname="qs"+cpt;
		eval(qname).PRICE=(eval(name).PRICE)*1.5;
		eval(qname).NB_Q=0;

		tab_spells.push(eval(name));
		tab_qs.push(eval(qname));
	}
}