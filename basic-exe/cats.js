function cats(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of data) {
        let [name, age] = cat.split(" ");
        let tempCat = new Cat(name, age);
        tempCat.meow();
    }
}