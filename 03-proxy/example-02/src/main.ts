interface Subject {
  request(): void
}

class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.')
  }
}

class SubjectProxy implements Subject {
  private realSubject: RealSubject

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject
  }

  private checkAccess() {
    console.log('Proxy: Checking access prior to firing a real request.')
    return true
  }

  private logAccess() {
    console.log('Proxy: Logging the time of request.')
  }

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }
}

function clientCode(subject: Subject) {
  subject.request()
}

console.log('\nClient: Executing the client code with a real subject:')
const realSubject = new RealSubject()
clientCode(realSubject)

console.log('')

console.log('\nClient: Executing the same client code with a proxy:')
const proxy = new SubjectProxy(realSubject)
clientCode(proxy)
