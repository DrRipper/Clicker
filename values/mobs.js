//Création des monstres
var mob0 = { NAME : "Hungry Corpse",
			 HP : 10.0,
			 EXP : 1,
			 LOOT : 99,
			 BOSS : 0,
			 NB_KILL : 0};

var mob1 = { NAME : "Sand Spitter" };
var mob2 = { NAME : "Drowned" };
var mob3 = { NAME : "Sand Spitter" };
var mob4 = { NAME : "Hillock" };

var mob5 = { NAME : "Cannibal" };
var mob6 = { NAME : "Gravel Eater" };
var mob7 = { NAME : "Infested Crab" };
var mob8 = { NAME : "Withered Husk" };
var mob9 = { NAME : "Fire Fury" };

var mob10 = { NAME : "Drowned" };
var mob11 = { NAME : "Infested Crab" };
var mob12 = { NAME : "Cannibal" };
var mob13 = { NAME : "Tide Strider" };
var mob14 = { NAME : "Hailrake" };

var mob15 = { NAME : "Dripping Dead" };
var mob16 = { NAME : "Great Rhoa" };
var mob17 = { NAME : "Murk Fiend" };
var mob18 = { NAME : "Rhoa Scavenger" };
var mob19 = { NAME : "Oozeback Bloom" };

var mob20 = { NAME : "Dripping Deat" };
var mob21 = { NAME : "Bone Rhoa" };
var mob22 = { NAME : "Ancient Archer" };
var mob23 = { NAME : "Skeletal Beast" };
var mob24 = { NAME : "Kadavrus the Defiler" };

var mob25 = { NAME : "Cursed Spawn" };
var mob26 = { NAME : "Drifting Eye" };
var mob27 = { NAME : "Cave Crustacean" };
var mob28 = { NAME : "Crustacean Sniper" };
var mob29 = { NAME : "The Deep Dweller" };

var mob30 = { NAME : "Flesh Eater" };
var mob31 = { NAME : "Drifting Eye" };
var mob32 = { NAME : "Spawn" };
var mob33 = { NAME : "Broodling" };
var mob34 = { NAME : "Brood Princess" };

var mob35 = { NAME : "Ancient Archer" };
var mob36 = { NAME : "Cannibal" };
var mob37 = { NAME : "Grinning Totem" };
var mob38 = { NAME : "Rattling Bones" };
var mob39 = { NAME : "All Praise Kuduku" };

var mob40 = { NAME : "Burning Bowman" };
var mob41 = { NAME : "Dune Hellion" };
var mob42 = { NAME : "Goatman Shaman" };
var mob43 = { NAME : "Flame Hellion" };
var mob44 = { NAME : "Ironpoint the Forsaken" };

var mob45 = { NAME : "Brittle Arsonist" };
var mob46 = { NAME : "Brittle Thief" };
var mob47 = { NAME : "Necromancer" };
var mob48 = { NAME : "Rotting Damned" };
var mob49 = { NAME : "Chatters" };

var mob50 = { NAME : "Axiom Frostguard" };
var mob51 = { NAME : "Brittle Bleeder" };
var mob52 = { NAME : "Diabolist" };
var mob53 = { NAME : "Rotting Damned" };
var mob54 = { NAME : "Sawbones" };

var mob55 = { NAME : "Axiom Thunderguard" };
var mob56 = { NAME : "Brittle Poacher" };
var mob57 = { NAME : "Brittle Thief" };
var mob58 = { NAME : "Diabolist" };
var mob59 = { NAME : "Brutus, Lord Incarcerator" };

var tab_mobs = [mob0];

//Initialise les statistiques de tous les mobs
//Augmenter la valeur maximale du compteur pour chaque mob rajouté
//Valeurs de multiplication / soustraction modifiables
function init_mobs(){
	for(var cpt=1;cpt<60;cpt++){
		var name="mob"+cpt;
		var previous = "mob"+(cpt-1);

		if((cpt%5)-4 != 0 && (cpt%5)-4 != -4){
			eval(name).HP=eval(previous).HP*2;
			eval(name).EXP=(eval(previous).EXP)*2;
			eval(name).LOOT=(eval(previous).LOOT)*2;
			eval(name).BOSS=0;
			eval(name).NB_KILL=0;
		}else if((cpt%5)-4 == 0){
			eval(name).HP=eval(previous).HP*10;
			eval(name).EXP=(eval(previous).EXP)*12;
			eval(name).LOOT=(eval(previous).LOOT)*12;
			eval(name).BOSS=1;
			eval(name).NB_KILL=0;
		}else{
			eval(name).HP=eval(previous).HP/5;
			eval(name).EXP=(eval(previous).EXP)/6;
			eval(name).LOOT=(eval(previous).LOOT)/6;
			eval(name).BOSS=0;
			eval(name).NB_KILL=0;
		}

		tab_mobs.push(eval(name));
	}
}