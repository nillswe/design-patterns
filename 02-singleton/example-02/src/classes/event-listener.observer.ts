type CallbackFn = () => void

export class EventListener {
  private listeners: Set<CallbackFn> = new Set()

  constructor() {}

  public subscribe(callback: CallbackFn) {
    this.listeners.add(callback)

    return () => {
      this.unsubscribe(callback)
    }
  }

  private unsubscribe(listener: CallbackFn) {
    this.listeners.delete(listener)
  }

  public notify() {
    this.listeners.forEach(listener => listener())
  }
}
