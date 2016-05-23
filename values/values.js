// Met en place le mob de base
var current_mob = 0;
var hp_current_mob = tab_mobs[current_mob].HP;

// Met en place l'affichage de l'exp et la variable d'ajout d'exp
var exp = 0;
var addExp = tab_mobs[current_mob].EXP;


// Met en place la variable de dégâts
var base_damages = 1000;
var damages = base_damages;
var base_dps = 0;
var dps = base_dps;

// Met en place les currencies
var nb_armourer_scraps = 0;
var nb_blacksmith_whetstones = 0;
var nb_alterations = 0;
var nb_wisdoms = 0;

//Save
var save_file;
