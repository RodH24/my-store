const username: string = 'rodh24';
const sum = (a: number, b: number) => {
  return a +b;
}
sum(1, 2);

class Person {
 /* age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;

  } */
  constructor(public age: number, public lastName: string){}
}
const hector = new Person(33, 'rod');
