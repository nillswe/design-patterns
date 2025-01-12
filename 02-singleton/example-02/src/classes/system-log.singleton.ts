
import { EventListener } from "./event-listener.observer";


type LogType = string[]

export class SystemLog  extends EventListener{
  private static _instance: SystemLog
  private data: LogType = []


  private constructor() {
    super()
  }

  public static get instance() {
    if(!SystemLog._instance) {
      SystemLog._instance = new SystemLog()
    }
    return SystemLog._instance
  }

  public append(description:string) {
    this.data.push(description)
    this.notify()
  }

  public get list() { 
    return this.data
  }
  
}