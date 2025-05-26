// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, year, maxSpeedLimit, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeedLimit = maxSpeedLimit;
    this.engineCapacity = engineCapacity;

    this.drive = function drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeedLimit} на годину`)
    }

    this.info = function info() {
        for (const key in this) {
            console.log(`[${key}], ${this[key]}`);
        }
    }
    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0)
            this.maxSpeed = this.maxSpeed + newSpeed;


    }

    this.changeYear = function changeYear(year) {
        if (year > 0) this.year = year;
    }
    this.addDriver = function addDriver(driver) {
        if (driver) {
            this.driver = driver;
        }

    }
}

    const car = new Car('asd', 'qwe', 1234, 122, 4);

    console.log(car);


    car.drive();
    car.info();
    car.increaseMaxSpeed(100);
    car.changeYear(2000);
    car.addDriver({});
console.log(car);



