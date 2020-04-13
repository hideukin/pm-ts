// tslint:disable-next-line: no-console
console.log("Hello, Typescript!");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

console.log(`${d}`);

const aa: { bb: number } = { bb: 12 };
// tslint:disable-next-line: no-console
console.log(aa.bb);

let cc: {
  firstName: string;
  lastName: string;
} = {
  firstName: "John",
  lastName: "Smith",
};

class Person {
  constructor(public firstName: string, public lastName: string) {}
}
cc = new Person("matt", "jones");

let user: { readonly firstName: string } = { firstName: "abby" };
user.firstName;
