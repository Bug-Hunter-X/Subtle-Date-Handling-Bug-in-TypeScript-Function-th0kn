function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}.`;
}

greet("world", new Date());