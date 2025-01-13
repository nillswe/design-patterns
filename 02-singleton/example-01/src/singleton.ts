export class CounterSingleton {
  static #instance: CounterSingleton
  value: number = 0

  private constructor() {}

  public static get instance() {
    if (!this.#instance) {
      this.#instance = new CounterSingleton()
    }

    return this.#instance
  }

  // public static get instance() {
  //   if (!this._instance) {
  //     this._instance = new CounterSingleton()
  //   }

  //   return this._instance
  // }

  // public static instance() {
  //   if (!this._instance) {
  //     CounterSingleton._instance = new CounterSingleton()
  //   }

  //   return CounterSingleton._instance
  // }

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
