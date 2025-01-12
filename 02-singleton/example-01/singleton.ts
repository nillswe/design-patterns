export class Singleton {
   static #instance: Singleton;
   private data = 0

  private constructor() { }

  public static get instance(): Singleton {
    if(!Singleton.#instance) {
      Singleton.#instance = new Singleton()
    }

    return Singleton.#instance
  }

  public doAction() {
    this.data++
    console.log("Action", this.data)
  }
}