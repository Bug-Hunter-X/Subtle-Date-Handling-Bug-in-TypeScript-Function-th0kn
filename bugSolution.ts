function greet(person: string, date: Date | null): string {
  if (date === null || !(date instanceof Date) || isNaN(date.getTime())) {
    return `Hello, ${person}! Today's date is unknown.`;
  }
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}.`;
}

let myDate = new Date();
greet("world", myDate);

greet("Alice", null); //Handles null value
greet("Bob", new Date('invalid date')); //Handles invalid date