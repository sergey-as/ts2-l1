class User {
    private _name: string;
    private _age: number;


    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }

    greeting(): string {
        return `hello my name is ${this._name}`
    }
}

function foo(a: User) {
}

let user = new User('kokos', 33);
// user.age = 33;
// user.name = 'kokos';
user.age = 123;
console.log(user.age);
foo(user);

interface IUser {
    name: string;
    age: number;

    greeting?(a: string): string;
}

function bar(b: IUser) {

}

bar({name: 'asdfg', age: 123});
bar({
    name: 'asdfg', age: 123, greeting: (a: string): string => {
        return 'hello'
    }
});

class X implements IUser {

    ownXProp1: string;
    ownXProp2: string[];
    age: number;
    name: string;

}

let x = new X();
let iUsers: IUser[] = [
    x,
    {
        name: 'asdfg', age: 123, greeting: (a: string): string => {
            return 'dsfsdf';
        }
    }
]

bar(new X());

function foobar(user: User) {
    user.greeting();
}

let user1 = new User('asd', 123);
foobar(user1);


// foo({name: 'asdfg', age: 123});

// foo({name: 'asdfg', age: 123, greeting(): string {
//     return 'dsfsdf'
//     }});

// function foo(a: { name: string, age: number, skils: string[], status: boolean }) {
// }
//
// foo({name: 'vasya', age: 31, skils: ['', ''], status: false});

// function foo(a: number): number {
//     return a;
// }

// function foo(): void {
// }

// function foo(x: string) {
//     console.log(x);
//     return 'foobar';
// }
//
// foo('str');
// // foo(100);
// // foo({name: 'vasya'});
// // foo(true);