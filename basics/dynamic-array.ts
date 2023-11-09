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
  constructor(private capacity: number) {}

  get(index: number): number {
    throw new Error("Method not implemented.");
  }

  set(index: number, value: number): void {
    throw new Error("Method not implemented.");
  }

  pushback(value: number): void {
    throw new Error("Method not implemented.");
  }

  popback(): number {
    throw new Error("Method not implemented.");
  }

  resize(): void {
    throw new Error("Method not implemented.");
  }

  getSize(): number {
    throw new Error("Method not implemented.");
  }

  getCapacity(): number {
    throw new Error("Method not implemented.");
  }
}
