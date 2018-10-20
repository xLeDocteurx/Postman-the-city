class Generate {
  static report() {
    console.log(`/////////////////////////`);
    console.log(`:::::::::::::::::::::::::`);
    console.log(`CITY REPORT :`);
    console.log(`:::::::::::::::::::::::::`);
    console.log(`City Name : `);
    console.log(city.get_name);
    console.log(`City Streets : `);
    console.table(city.get_streets);
    console.log(`City Houses : `);
    console.table(city.get_houses);
    console.log(`:::::::::::::::::::::::::`);

    console.log(`/////////////////////////`);
    console.log(`/////////////////////////`);
  }

  static getDatas() {
    // Fetch method used for SWAPI.
    let people = fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(function(data){
        return data.results
    })
    .catch( e => console.log(e) );
    people.then(data => console.log(data));
    return people;
  }
  
  static streets(number) {
    let streets = [];
    for (let i=0;i<number;i++) { 
      streets.push(new Street());
    }
    return streets;
  }

  static streets_suffixes() {
    return ['Street','Avenue','Road'];
  }
  
  static houses(number) {
    let houses = [];
    for (let i=0; i<number; i++) { 
      houses.push(new House());
    }
    return houses;
  }
// some_city.get_streets[Math.floor(Math.random() * some_city.get_streets.lengths)]

  static resident() {
    return new Resident();
  }

  static job() {
    const jobs = ['Electricien','Plombier','Infirmier','Conducteur d\'engins','Dentiste','Pompier','Gendarme','Informaticien','Policier','Docteur','Boulanger','Bibliothèquère'];
    return jobs[Math.floor(Math.random() * jobs.length)];
  }
}

class City {
  // Constructeur
  constructor() {
    this.name = '';
    this.streets = [];
    this.houses = [];
    // this.residents = [];
    
    this.init();
  }
  // Accesseurs
  get get_name() { return this.name }
  set set_name(name) { this.name = name }
  get get_streets() { return this.streets }
  set set_streets(streets) { this.streets = streets }

  get get_houses() {
    return this.houses;
  }

  init(streets_number, houses_number) {
    //initialisation de la ville :
    this.set_name = faker.address.city();
    //initialisation des rues : 
    this.streets = Generate.streets(streets_number);
    //initialisation des maisons :
    this.houses = Generate.houses(houses_number);
    // for (let i = 0; i <= houses_number; i++) {
    //   this.houses.push(new House());
    // }
  }
}

class Street {
  constructor(name) {
    this.name = `${faker.address.streetName()} ${Generate.streets_suffixes()[Math.floor(Math.random() * Generate.streets_suffixes().length)]}`;
    this.houses = [];
  }
  get get_name() { return this.name }
  get get_houses() { return this.houses }
  set set_name(name) { this.name = name }
  set add_house(house) { this.houses.push(house) }
}

class House {
  constructor() {
    const streets = city.get_streets;
    const street = streets[Math.floor(Math.random() * streets.length)];
    street.add_house = this;
    
    this.number = street.get_houses.length;
    this.street = street.get_name;

    this.residents = [];
    this.letterBox = new LetterBox();

    //   document.getElementById('body').innerHTML += `
    //   <img class="house-i" src="http://www.xn--icne-wqa.com/images/icones/6/0/go-home-5.png" alt="house"/>
    // `;
  }
}

class LetterBox {
  constructor() {
    this.content = [];
  }
}