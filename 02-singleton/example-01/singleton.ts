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


export class Singleton2 {
  static instance: Singleton2
  private counter:number = 1

  constructor() {
    if(Singleton2.instance) {
      console.log("instance already exist")
      return Singleton2.instance
    }else {
      Singleton2.instance =this
    }
  }

  public doAction() {
    this.counter++
    console.log("Second", this.counter)
  }
} 