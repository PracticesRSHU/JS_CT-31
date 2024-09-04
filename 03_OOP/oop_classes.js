class Student {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
    }

    showAge() {
        let studenAge = Math.trunc((Date.now() - Date.parse(this.birthday)) / (365 * 24 * 60 * 60 * 1000));
        console.log(this.firstname + " has " + studenAge + " years old.");
    };

    showInfo() {
        console.log("Student name: " + this.firstname + " " + this.lastname)
    }
}

let studentDiana = new Student("Diana", "Alkonova", "2005-09-29");
let studentDmitro = new Student("Dmitro", "Lahoiko", "2003-10-24");

console.log(studentDiana)
console.log(studentDmitro)

Student.prototype.group = "CT-31";

console.log(studentDiana.group);
console.log(studentDmitro.group);
studentDmitro.group = "CT-21st";
console.log(studentDmitro);
let studentDmitro1 = new Student("Dmitro1", "Lahoiko", "2003-10-24");
studentDmitro1.group = "CT-11";
console.log(studentDmitro1);

//======Принципи ООП===========
class Car {
    #id // 1 variant (new) private field by contract
    #volume
    _kilometers // 2 variant private (protected) field by contract
    static countCar = 0; //static
    constructor(model, year, color, volume) {
        this.#id = ++Car.countCar
        this.model = model;
        this.year = year;
        this.color = color;
        this.#volume = volume;
        this._kilometers = 0
    }
    //methods
    print() {
        console.log(`Car(${this.#id}): ${this.model} ${this.color} ${this.year}`);
        this.#printInfoManufacture();
    }

    //private method

    #printInfoManufacture() {
        console.log("This info manufacture...");
    }
    //methods get/set
    getVolume() {
        return this.#volume
    }

    // setKilometers(value){
    //     if(value>=0){
    //         this._kilometers=value;
    //     }
    // }
    // getKilometers(){
    //     return this._kilometers;
    // }


    set kilometers(value) {
        if (value >= 0) {
            this._kilometers = value;
        }
    }
    get kilometers() {
        return this._kilometers;
    }

    static infoForAllCars() {
        console.log("Called static method ")
    }
}

let myCar = new Car("Reno", 2012, "gray", 2.5);
console.log(myCar.color);
myCar.print();
myCar.color = "red";
myCar.print();
console.log(myCar.id) //undefind
console.log(myCar.getVolume());
// myCar.setKilometers(3000)
// console.log(myCar.getKilometers())
myCar.kilometers = 2400; //set 
console.log(myCar.kilometers); //get

class Ambulance extends Car {
    constructor(model, year, color, volume, voice) {
        super(model, year, color, volume)
        this.voice = voice;
    }
    signal() {
        console.log("Stop!!! Signal... voluem: " + this.voice);
    }
    print() {
        super.print()
        // console.log(super.#volume) //error
        console.log("Voice: " + this.voice)
    }

}

let ambulance1 = new Ambulance("Toyota", 2020, "white", 3.0, "viu-viu");
ambulance1.print();
let ambulance2 = new Ambulance("Toyota Lux", 2021, "black", 3.0, "viu-viu");
ambulance2.print();
console.log("All cars: " + Car.countCar)

Car.infoForAllCars();
// myCar.infoForAllCars(); //error

