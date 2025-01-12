console.log("Hello from module.js")

const bananaPrivada = "Nanica"
export const bananaPublica = "Da terra"

export const calcTwoNumbers = (a,b) => {
  console.log("Result: ",a + b)
}

let nomeUsuarioAtual = "Nill"
export function nomeUsuarioAtualPublic(name) {
   nomeUsuarioAtual = name
  return nomeUsuarioAtual 
}

const user = {
  name: "Nill",
  age: 28,
  superSecreteInformation: "banana"
}

export function setAge(age) { 
  user.age = age
}

export function setName (name) {
  if(name === "Jão" || name === "marcos") {
    throw new Error("Name not valid")
  } else {
    user.name = name
  }
}

export function showUser() { 
  console.log(user)
}

