const streets_number = 20;
const houses_number = 100;
const residents_number = Math.round(houses_number * 1.25);

// Instanciation de la nouvelle ville
let city = new City();
// Déclenchement de la méthode d'initialisation de la ville
city.init(streets_number, houses_number, residents_number);
// Créer un report pour pouvoir surveiller la génération de la ville
Generate.report();
// Déclenchement du facteur
city.postmen.start_tour();
