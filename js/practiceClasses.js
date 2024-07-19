class User {
    constructor(name, age, email, width_CM, nationality) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.width_CM = width_CM;
        this.nationality = nationality;
    }

    getDatas() {
        return this.name === undefined ? 'User not found.' : `User found: ${this.name}, ${this.age}, ${this.email}, ${this.width_CM}, ${this.nationality}`;
    }
    
}
let user = new User('Maria', 17, 'mariajose@gmail.com', 1.67, 'COL');
console.log(user.getDatas())
