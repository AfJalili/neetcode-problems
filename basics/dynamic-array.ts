interface IDynamicArray {
  get(i: number): number;

  set(i: number, n: number): void;

  pushback(n: number): void;

  popback(): number;

  resize(): void;

  getSize(): number;

  getCapacity(): number;
}

class DynamicArray implements IDynamicArray {
  private array: Array<number>;
  private size: number = 0;

  constructor(private capacity: number) {
    if (this.capacity <= 0) {
      throw new Error("capacity must be greater than zero");
    }
    this.array = new Array<number>(this.capacity);
  }

  get(i: number): number {
    return this.array[i];
  }

  set(i: number, n: number): void {
    this.array[i] = n;
    this.size++;
  }

  pushback(n: number): void {
    if (this.isFull()) {
      this.resize();
    }
    this.array[this.size] = n;
    this.size++;
  }

  popback(): number {
    this.size--;
    return this.array[this.size];
  }

  resize(): void {
    this.capacity *= 2;
    const newArray = new Array<number>(this.capacity);
    for (let i = 0; i < this.array.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  private isFull() {
    return this.getSize() === this.capacity;
  }
}
