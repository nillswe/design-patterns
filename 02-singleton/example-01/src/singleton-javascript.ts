let instance: CounterSingletonJS

export class CounterSingletonJS {
  value: number = 0

  private constructor() {}

  public static get instance() {
    if (!instance) {
      instance = new CounterSingletonJS()
    }

    return instance
  }

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
