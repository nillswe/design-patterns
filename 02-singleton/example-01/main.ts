import {Singleton, Singleton2} from "./singleton"

import "./first-file"
import "./second-file"


const instance = Singleton.instance
instance.doAction()

console.log("\n")

const copy1 = new Singleton2()
const copy2 = new Singleton2()

copy1.doAction()
copy1.doAction()

console.log(copy1)
console.log(copy2)