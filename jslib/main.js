(function($){

	$(document).ready(function(){
		//Gère le background du haut de page et l'effet associé
		//Gère l'effet lors du scroll de la page
		function parallax(){
		    var scrolled = $(window).scrollTop();
		    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
		}
		var jumboHeight = $('.jumbotron').outerHeight();
		$(window).scroll(function(e){
		    parallax();
		});

//---------------------------INIT--------------------------------------------------------
		init_mobs();
		init_spells();
		init_weapons();
		for(var cpt=0; cpt<5; cpt++)
			$("#weapon"+cpt).html(tab_weapons[cpt].NAME+" level "+ (tab_weapons[cpt].LEVEL+1) +" : " + tab_weapons[cpt].PRICE + " Wisdom Scrolls");

		for(var cpt=0; cpt<5; cpt++)
			$("#qw"+cpt).html("Quality +"+ (tab_qw[cpt].NB_Q+1) +" : " + tab_qw[cpt].PRICE + " Wisdom Scrolls");

		for(var cpt=0; cpt<2; cpt++)
			$("#spell"+cpt).html(tab_spells[cpt].NAME+" level "+ (tab_spells[cpt].LEVEL+1) +" : " + tab_spells[cpt].PRICE + " Wisdom Scrolls");

		for(var cpt=0; cpt<2; cpt++)
			$("#qs"+cpt).html("Quality +"+ (tab_qs[cpt].NB_Q+1) +" : " + tab_qs[cpt].PRICE + " Wisdom Scrolls");

		$("#damages").html(damages);
		$("#dps").html(dps);
		reload_mob();

		$("#compteurExp").html('').append(exp);

		check_currencies();
//--------------------------FIN INIT-----------------------------------------------------------------

//-----------------------ARMES--------------------------------------------------------------
		// Achat de la première arme
		$("#weapon0").on('mouseup', function(e){
			upgrade_level_weapon(0);
		});

		// Achat de la seconde arme
		$("#weapon1").on('mouseup', function(e){
			upgrade_level_weapon(1);
		});

		//Gère les upgrades de qualité pour les armes
		$("#qw0").on('click', function(e){
			upgrade_quality_weapons(0);
		});

		$("#qw1").on('click', function(e){
			upgrade_quality_weapons(1);
		});
//---------------------FIN ARMES-------------------------------------------------------------

//-----------------------SPELLS--------------------------------------------------------------
		// Achat du premier sort
		$("#spell0").on('mouseup', function(e){
			upgrade_level_spell(0);
		});

		// Achat du second sort
		$("#spell1").on('mouseup', function(e){
			upgrade_level_spell(1);
		});

		//Gère les upgrades de qualité pour les sorts
		$("#qs0").on('click', function(e){
			upgrade_quality_spell(0);
		});

		$("#qs1").on('click', function(e){
			upgrade_quality_spell(1);
		});
//-----------------------FIN SPELLS-----------------------------------------------------------

//----------------------GENERAL---------------------------------------------------------------

		// Gère le clic sur le bouton de dégâts
		$("#damagesClicker").on('mouseup', function(e){
			attack(damages);
		});

		// Gère le passage vers le mob précédent
		$("#previousMob").on('mouseup', function(e){
			current_mob = current_mob-1;
			reload_mob();
			check_mobs();
		});

		// Gère le passage vers le mob suivant
		$("#nextMob").on('mouseup', function(e){
			current_mob = current_mob+1;
			reload_mob();
			check_mobs();
		});

		//Gère la sauvegarde
		$("#save_button").on('click', function(e){
			save_game();
		});
		$("#load_save").on('click', function(e){
			load_save();
		});
		$("#delete_save").on('click', function(e){
			delete_save();
		});

		//On vérifie le montant de currency disponible par rapport aux objets achetables
		$('#compteurWisdoms, #compteurAlterations,#compteurScraps').on('change', function(e){
			/*for(var cpt=0;cpt<2;cpt++){
				check_buyouts("weapon"+cpt,tab_weapons,cpt);
				check_buyouts_quality(tab_qw[cpt].PRICE,"qw"+cpt);
				check_buyouts("spell"+cpt,tab_spells,cpt);
				check_buyouts_quality(tab_qs[cpt].PRICE,"qs"+cpt);
			}*/
			check_buyouts("weapon0",tab_weapons,0);
			check_buyouts_quality(tab_qw[0].PRICE,"qw0");
			check_buyouts("weapon1",tab_weapons,1);
			check_buyouts_quality(tab_qw[1].PRICE,"qw1");

			check_buyouts("spell0",tab_spells,0);
			check_buyouts_quality(tab_qs[0].PRICE,"qs0");
			check_buyouts("spell1",tab_spells,1);
			check_buyouts_quality(tab_qs[1].PRICE,"qs1");
		});

		window.setInterval(function(){
			if(dps>0)
				attack(dps);
		}, 1000);

	});
})(jQuery);
//-------------------------FIN GENERAL---------------------------------------------------------