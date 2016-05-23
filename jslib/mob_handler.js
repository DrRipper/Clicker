
//Permet d'infliger des dégâts
function attack(damages){
	hp_current_mob = prettify(hp_current_mob - damages);
	check_hp();
	$("#hpMobCourant").html('').append(hp_current_mob);
}

//Permet de charger le mob courant et les variables associées
function reload_mob(){
	$("#nomMobCourant").html('').append(tab_mobs[current_mob].NAME);
	hp_current_mob = tab_mobs[current_mob].HP;
	$("#hpMobCourant").html('').append(hp_current_mob);
	$("#expMobCourant").html('').append(tab_mobs[current_mob].EXP);
	$("#lootMobCourant").html('').append(tab_mobs[current_mob].LOOT);
	$("#nbKillMobCourant").html('').append(tab_mobs[current_mob].NB_KILL);
}

//Gère le combat, la mort du mob et la montée en exp et en loot
function fight(){
	hp_current_mob = hp_current_mob - damages;
	check_hp();
	$("#hpMobCourant").html('').append(hp_current_mob);
}

//Gère la mort des mobs
function check_hp(){
	if(hp_current_mob<=0){
		exp = exp + tab_mobs[current_mob].EXP;
		$("#compteurExp").html('').append(exp);
		nb_wisdoms = nb_wisdoms + tab_mobs[current_mob].LOOT;
		hp_current_mob = tab_mobs[current_mob].HP;
		tab_mobs[current_mob].NB_KILL++;
		check_currencies();
		check_weapons();
		check_spells();
		check_mobs();
		reload_mob();
	}
}

// Vérifie si on peut passer au mob suivant ou précédent
function check_mobs(){
	if(current_mob==0)
		$("#previousMob").addClass('disabled');
	else if(current_mob!=0)
		$("#previousMob").removeClass('disabled');
	if(tab_mobs[current_mob].BOSS==0 && tab_mobs[current_mob].NB_KILL>=10)
		$("#nextMob").removeClass('disabled');
	else if(tab_mobs[current_mob].BOSS==0 && tab_mobs[current_mob].NB_KILL<10)
		$("#nextMob").addClass('disabled');
	else if(tab_mobs[current_mob].BOSS==1 && tab_mobs[current_mob].NB_KILL<1)
		$("#nextMob").addClass('disabled');
	else if(tab_mobs[current_mob].BOSS==1 && tab_mobs[current_mob].NB_KILL>=1)
		$("#nextMob").removeClass('disabled');
}
