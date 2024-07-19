var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
};

Person.prototype.teach = function(subject) {
	console.log(this.name + " is now teaching " + subject);
};

var him = new Person();

him.initialize("María", 25);
him.teach("logic of programming.");