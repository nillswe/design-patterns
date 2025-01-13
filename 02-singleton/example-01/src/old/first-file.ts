import {Singleton, singleton2} from './singleton'

const instance1 = Singleton.instance
const instance2 = Singleton.instance

instance1.doAction()
instance2.doAction()

singleton2.doAction()
singleton2.doAction()
singleton2.doAction()

console.log(singleton2)
