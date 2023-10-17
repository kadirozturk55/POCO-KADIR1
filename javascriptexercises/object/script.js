const food = {
    calories: 250,
    vitamins: ["B12", "C", "A"],
    name: "Banana",
    contains: ["nuts", "gluten"],
    vegeterian: true,
    halal: true,
    expirary_date: "2023-10-18",
    category: "fruit",
    price: 5.90,
    isEdible: function() {
        let today = new Date();
        if (today.toISOString().split('T')[0] < this.expirary_date) {
            return true;
        }
        return false;
    }
};

console.table(food);
console.log(food.name);
console.log(food["expirary_date"]);
console.log(`Is my ${food.name} still edible?`);
console.log(food.isEdible());

function Food2(calories, vitamins = [], name, contains, vegeterian = true, halal, expirary_date, category, price) {
    this.calories = calories;
    this.vitamins = vitamins;
    this.name = name;
    this.contains = contains;
    this.vegeterian = vegeterian;
    this.halal = halal;
    this.expirary_date = expirary_date;
    this.category = category;
    this.price = price;
    this.isEdible = function() {
        let today = new Date();
        if (today.toISOString().split('T')[0] < this.expirary_date) {
            return true;
        }
        return false;
    }
}

const banana = new Food2(250, ["B12", "C", "A"], "Banana", ["nuts", "gluten"], true, true, "2023-12-31", "Fruit", 1.99);
//console.table(banana);

class Food {
    constructor(calories, vitamins = [], name, contains, vegeterian = true, halal, expirary_date, category, price) {
        this.calories = calories;
        this.vitamins = vitamins;
        this.name = name;
        this.contains = contains;
        this.vegeterian = vegeterian;
        this.halal = halal;
        this.expirary_date = expirary_date;
        this.category = category;
        this.price = price;
    }
    isEdible(){
        let today = new Date();
        if (today.toISOString().split('T')[0] < this.expirary_date) {
            return true;
        }
        return false;
    }
}

let apple=new Food(250, ["B12", "C", "A"], "Apple", ["nuts", "gluten"], true, true, "2023-12-31", "Fruit", 1.99);

console.table(apple);