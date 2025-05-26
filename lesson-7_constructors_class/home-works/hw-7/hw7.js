
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class Car {

constructor (model, producer, year, maxSpeedLimit, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeedLimit = maxSpeedLimit;
    this.engineCapacity = engineCapacity;


}
    drive = function drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeedLimit} на годину`)
    }

   info = function info() {
        for (const key in this) {
            console.log(`[${key}], ${this[key]}`);
        }
    }
   increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0)
            this.maxSpeed = this.maxSpeed + newSpeed;


    }

    changeYear = function changeYear(year) {
        if (year > 0) this.year = year;
    }
    addDriver = function addDriver(driver) {
        if (driver) {
            this.driver = driver;
        }

    }
}

let car = new Car('asd', 'qwe', 1234, 122, 4);

console.log(car);


car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);



