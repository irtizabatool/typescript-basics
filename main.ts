export {}
let message = 'Welcome world';
console.log(message);

let x;
const y = 80;

let isBeginner: boolean = true;
let total: number = 0;
let msg: string = 'hello';

let sentence: string = `The message is : ${msg}
Another message is : ${message}`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2 , 3];

let person1: [string, number] = ['Jane', 25];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Hey';

let myVar: unknown = 50;

function hasName(obj: any): obj is { name: string } {
    return !!obj && 
    typeof obj === "object" && 
    "name" in obj;
}
if(hasName(myVar)) {
    console.log(myVar.name);
}

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 5;
multiType = false;

function add (number1: number, number2: number = 10): number {
    if(number2)
        return number1 + number2;
    else
        return number1;
}
console.log(add(5, 10));
console.log(add(5));

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'John',
    lastName: 'Doe'
};

fullName(p);

class Employee {
    employeeName: string;

    constructor (name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello ${this.employeeName}`);
    }
}

let employee1 = new Employee('Jane');
console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager Delegating Work ${this.employeeName}`);
    }
}

let manager1 = new Manager('Bruce');
manager1.delegateWork();
manager1.greet()
console.log(manager1.employeeName);