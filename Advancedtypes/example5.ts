class GenericStorage<T> {
  public items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  removeByIndex(index: number) {
    this.items.splice(index, 1);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberStorage = new GenericStorage<number>();
numberStorage.add(10);
numberStorage.add(20);
numberStorage.removeByIndex(0);
console.log("Number Storage:", numberStorage.getAll());

const stringStorage = new GenericStorage<string>();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.removeByIndex(0);
console.log("String Storage:", stringStorage.getAll());

type Product = { id: number; name: string };
class ObjectStorage<T extends {id: number }> extends GenericStorage<T> {
  removeById(id: number) {
    this.items = this.getAll().filter(i => i.id !== id);
  }
}

const productStorage = new ObjectStorage<Product>();
productStorage.add({ id: 1, name: "Laptop" });
productStorage.add({ id: 2, name: "Phone" });
productStorage.removeById(1);
console.log("Product Storage:", productStorage.getAll());

type User = { id: number; username: string; role: string };
const userStorage = new ObjectStorage<User>();
userStorage.add({ id: 1, username: "ali", role: "admin" });
userStorage.add({ id: 2, username: "sofia", role: "user" });
console.log("User Storage:", userStorage.getAll());
