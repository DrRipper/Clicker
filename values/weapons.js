//Initialisation des armes, à refaire en PHP
var weapon0 = { NAME : "Nailed Fist",
				DAMAGES : 2.0,
				BASE : 2.0,
				PRICE : 10,
				LEVEL : 0};
var weapon1 = { NAME : "Skinning Knife" };
var weapon2 = { NAME : "Spiked Club" };
var weapon3 = { NAME : "Quartz Wand" };
var weapon4 = { NAME : "Coiled Staff" };

var tab_weapons = [weapon0];

//Initialisation des qualités pour armes
var qw0 = { PRICE : 15,
			NB_Q : 0 };

var qw1 = {};
var qw2 = {};
var qw3 = {};
var qw4 = {};

var tab_qw = [qw0];

function init_weapons(){
	for(var cpt=1;cpt<2;cpt++){
		var name="weapon"+cpt;
		var previous = "weapon"+(cpt-1);

		eval(name).DAMAGES=(eval(previous).DAMAGES)*2;
		eval(name).BASE=eval(name).DAMAGES;
		eval(name).PRICE=(eval(previous).PRICE)*2;
		eval(name).LEVEL=0;

		var qname="qw"+cpt;
		eval(qname).PRICE=(eval(name).PRICE)*1.5;
		eval(qname).NB_Q=0;

		tab_weapons.push(eval(name));
		tab_qw.push(eval(qname));
	}
}
