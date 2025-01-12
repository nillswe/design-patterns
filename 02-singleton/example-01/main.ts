import {Singleton, singleton2} from "./singleton"

import "./first-file"
import "./second-file"


const instance = Singleton.instance
instance.doAction()

console.log("\n")

const copy1 = singleton2
const copy2 = singleton2

copy1.doAction()
copy1.doAction()

console.log(copy1)
console.log(copy2)