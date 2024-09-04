//object function => constructor
function Student(firstname, lastname, birthday){ //prototype object
    this.firstname=firstname;
    this.lastname=lastname;
    this.birthday=birthday;


    this.showAge=function(){
        let studenAge=Math.trunc((Date.now()-Date.parse(this.birthday))/(365*24*60*60*1000));
        console.log(this.firstname+" has "+studenAge+" years old." )
    }
}

//convertation to class
// class Student {
//     constructor(firstname, lastname, birthday) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.birthday = birthday;


//         this.showAge = function () {
//             let studenAge = Math.trunc((Date.now() - Date.parse(this.birthday)) / (365 * 24 * 60 * 60 * 1000));
//             console.log(this.firstname + " has " + studenAge + " years old.");
//         };
//     }
// }


let studentDiana=new Student("Diana","Alkonova","2005-09-29");
studentDiana.showAge();
console.log(studentDiana)

// console.log(Date.now());
// console.log(Math.trunc((Date.now()-Date.parse("2005-09-29"))/(365*24*60*60*1000)));

Student.prototype.showInfo=function(){
    console.log("Student name: "+ this.firstname+" "+this.lastname)
}


studentDiana.showInfo();
console.log(studentDiana);
