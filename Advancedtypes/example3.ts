function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello World"));
console.log(identity<number>(2025));
console.log(identity<boolean>(true));

class Box<T> {
  constructor(public content: T) {  }
  getContent() {
    return this.content;
  }
}

const numberBox = new Box<number>(12345);
console.log(numberBox.getContent());

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getContent());

const booleanBox = new Box<boolean>(false);
console.log(booleanBox.getContent());
