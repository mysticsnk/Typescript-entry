console.log("--- Task 1 ---");

let userName: string = "Bogdan Smachny"
let userAge: number = 16
let isAdmin: boolean = true

let skills: string[] = ["HTML", "CSS", "Python", "C++", "C#", "JS", "TS", "React"]

console.log("--- Task 2 ---");

const formatPrice = (price: number, currency: string): string => {
    let beforeNumberCurrencies: string[] = ["$", "£", "¥", "€", "₹", "₩"]
    if (beforeNumberCurrencies.includes(currency)) {
        return `${currency}${price}`
    } else {
        return `${price} ${currency}`
    }
}

console.log(formatPrice(23, "uah"));
console.log(formatPrice(1000, "¥"));

const greet = (name: string, title?: string) : string => {
    if (title) {
        return "Hello, " + title + " " + name
    } else {
        return "Hello, " + name
    }
}

console.log(greet("Oleksandr", "Uchitel"));
console.log(greet("Bob"));

const logMessage = (message: string):void => {
    console.log(message);
}

logMessage("I am a very gud programer")

console.log("--- Task 3 ---");

interface User {
    readonly id: number;
    name: string;
    email: string;
    phone?: string;
}

let user1: User = {id: 1, name:"Gudli", email:"gudli@gmail.com", phone: "123"}
console.log(user1);

console.log("--- Task 4 ---");

type ID = string | number
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled'

const printStatus = (orderId: ID, status: OrderStatus):void => {
    console.log(`Order ${orderId} - ${status}`);   
}

printStatus(1, "shipped")
printStatus("21ihbkn1", "cancelled")

console.log("--- Task 5 ---");

enum Role {
    Admin, 
    User,
    Guest
}

const checkAccess = (role: Role) => {
    return role === Role.Admin
}

console.log("Guest has access: ");
console.log(checkAccess(Role.Guest));

console.log("Admin has access: ");
console.log(checkAccess(Role.Admin));

console.log("--- Task 6 ---");

const doubleValue = (input: string | number): string | number => {
    if (typeof input === "number") return input * 2
    if (typeof input === "string") return input.repeat(2)
    
    let checkerOfNever: never = input
    throw new TypeError(`Expected either a string or a number, got ${typeof input}`)
}

console.log(doubleValue(11));
console.log(doubleValue("11"));

console.log("--- Task 7 ---");

class BankAccount {
    public owner: string;
    private __balance: number;

    public constructor(owner: string, balance?: number ) {
        this.owner = owner
        this.__balance = balance ?? 0
    }

    public deposit(amount: number):void {
        if (amount < 0) {
            throw new Error("Cannot deposit a negative sum")
        }
        this.__balance += amount
    }

    public getBalance() : number {
        return this.__balance
    }
}

let bankAccount = new BankAccount("Gudli", 1000)
console.log(bankAccount);
bankAccount.deposit(20)
console.log(bankAccount);
console.log(bankAccount.getBalance());

