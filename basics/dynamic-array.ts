interface IDynamicArray {
  get(index: number): number;

  set(index: number, value: number): void;

  pushback(value: number): void;

  popback(): number;

  resize(): void;

  getSize(): number;

  getCapacity(): number;
}

class DynamicArray implements IDynamicArray {
  private array: Array<number>;

  constructor(private capacity: number) {
    if (this.capacity <= 0) {
      throw new Error("capacity must be greater than zero");
    }
    this.array = new Array<number>(this.capacity);
  }

  get(index: number): number {
    return this.array[index];
  }

  set(index: number, value: number): void {
    this.array[index] = value;
  }

  pushback(value: number): void {
    if (this.isFull()) {
      this.resize();
    }
    this.array.push(value);
  }

  popback(): number {
    return this.array.pop() ?? NaN;
  }

  resize(): void {
    this.capacity *= 2;
  }

  getSize(): number {
    return this.array.reduce((acc: number, currentValue: number): number => {
      return typeof currentValue === "number" ? ++acc : acc;
    }, 0);
  }

  getCapacity(): number {
    return this.capacity;
  }

  private isFull() {
    return typeof this.array[this.capacity - 1] === "number";
  }
}
