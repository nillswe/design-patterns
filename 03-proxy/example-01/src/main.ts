const person = {
  name: 'John Doe',
  age: 42,
  email: 'email@email.com',
  country: 'Canada',
}

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop.toString()} is ${Reflect.get(target, prop)}`)
    return Reflect.get(target, prop)
  },
  set: (target, prop, value) => {
    if (prop === 'age') {
      if (value < 18) {
        console.log('Age must be greater than 18')
        return true
      }
    }

    console.log(`Changed ${prop.toString()} from ${Reflect.get(target, prop)} to ${value}`)
    Reflect.set(target, prop, value)
    return true
  },
})

console.log(personProxy.country)
personProxy.email = 'email2@email.com'
personProxy.age = 13
personProxy.age
