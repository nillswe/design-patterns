
export class SystemLog {
  private static _instance: SystemLog
  private data: string[] = []

  private constructor() {}

  public static get instance() {
    if(!SystemLog._instance) {
      SystemLog._instance = new SystemLog()
    }
    return SystemLog._instance
  }

  public append(description:string) {
    this.data.push(description)
  }

  public list() { 
    return this.data
  }
  
}