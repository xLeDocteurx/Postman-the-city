const streets_number = 20;
const houses_number = 100;

// Generate.getDatas(houses_number);
let city = new City();
city.init(streets_number, houses_number);

// Créer un report pour pouvoir surveiller l'activité de l'application
Generate.report();

class People {
  constructor() {
    this.characs = Generate.user();
    this.status = 'Alive';
  }
}

class Postman extends People {
  constructor(characs, status) {
    super(characs, status);
    this.job = 'Postman';
  }
}

class Resident extends People {
  constructor(characs, status) {
    super(characs, status);
    this.job = Generate.job();
  }
}
