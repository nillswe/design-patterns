// import {counterSingletonNode} from './singleton-node'
import {CounterSingletonJS} from './singleton-javascript'
// import './secondary'

const copia = CounterSingletonJS.instance
const copia2 = CounterSingletonJS.instance

// console.log(copia === copia2)

console.log('\n')
copia.getCount()
copia.increment()
copia.getCount()

console.log('\n')

copia2.getCount()
copia2.increment()
copia2.getCount()
