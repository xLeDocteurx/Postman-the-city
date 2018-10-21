const streets_number = 20;
const houses_number = 100;
const residents_number = Math.round(houses_number * 1.25);

// Generate.getDatas(houses_number);
let city = new City();
city.init(streets_number, houses_number, residents_number);

// Créer un report pour pouvoir surveiller l'activité de l'application
Generate.report();