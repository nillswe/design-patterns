class CounterSingletonNode {
  value: number = 0

  constructor() {}

  public getCount() {
    console.log('The current value is:', this.value)
  }

  public increment() {
    this.value++
  }

  public decrement() {
    this.value--
  }
}

export const counterSingletonNode = new CounterSingletonNode()
