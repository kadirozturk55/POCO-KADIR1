class Teacher {
    constructor (name, age) {
        this.name=name;
        this.age=age;
    }
}

let person=new Teacher ("John",30);

/*person=null;
person.name="Susanne";*/

console.table(person);

document.write(person.name.length);


const fruit = {
    name:"banana",
    color:"yellow",
    isedible: true

};

fruit.name="apple";

console.table(fruit);

console.log (Object.keys(person));
console.log (Object.values(person));


let obj = {doors: 2, windows: 8, rooms: 5};
for(let x in obj){
  console.log(x);
} 