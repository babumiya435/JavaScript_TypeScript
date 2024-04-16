console.log("Interfaces in Typescript");
var emp1 = {
    name: "Sameer",
    age: 30,
    salary: {
        amount: 20000,
        currency: "INR"
    }
};
//console.log(emp1);
// Function that expects a user object and returns string
function displayUser1(user) {
    return "User Details: ".concat(user.name.firstName, " ").concat(user.name.lastName);
}
var Document = /** @class */ (function () {
    function Document(content) {
        this.content = content;
    }
    Document.prototype.print = function (data) {
        console.log("data from instance: ".concat(data));
        console.log("data from class: ".concat(this.content));
    };
    return Document;
}());
var doc = new Document("data content");
doc.print("new");
// 3. Implementations of interfaces in TS
// 4. Implementations of interfaces in JS in other modules / frameworks
