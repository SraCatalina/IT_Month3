/* Создайте класс Работник, который будет иметь следующие свойства: name, surname, rate, days. Класс должен иметь метод getSalary(), который будет выводить зарплату работника: умножение ставки на количество отработанных дней.
 */

class Worker {
  constructor(fio, surname, rate, days) {
    this.fio = fio;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary(rate, days) {
    return rate * days;
  }
}

const worker1 = new Worker("Vladislav", "Grin", 5, 31);
const worker2 = new Worker("Ekaterina", "Grin", 3, 25);

console.log(worker1.getSalary(worker1.rate, worker1.days));

/* Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно: 
- создать класс Transport, свойства: type, price, brand и два метода getInfo() и getPrice(); 
- создать класс Car, наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей; 
- создать класс Bike, наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает масимальную скорость мотоцикла. 
*/

class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return {
      type: this.type,
      price: this.price,
      brand: this.brand,
    };
  }
  getPrice() {
    return {
      price: this.price,
    };
  }
}

class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return {
      doors: this.doors,
    };
  }
}

class Bike extends Transport {
  constructor(type, price, brand, speedmax) {
    super(type, price, brand);
    this.speedmax = speedmax;
  }
  getMaxSpeed() {
    return {
      speedmax: this.speedmax,
    };
  }
}

const car1 = new Car("car", 4300000, "Audi", 4);
const car2 = new Car("car", 2800000, "Mercedes-Benz", 4);
const bike1 = new Bike("bike", 1300000, "Harley-Davidson", 210);
const bike2 = new Bike("bike", 2300000, "Harley-Davidson", 320);

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 320,
    price: 2300000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];
