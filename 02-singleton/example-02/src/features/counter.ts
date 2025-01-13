import {SystemLog} from '../classes/system-log.singleton'

const logs = SystemLog.instance

export const renderCounter = (containerElement: HTMLElement | null, name: string) => {
  if (!containerElement) return
  let counter = 0

  const counterElem = document.createElement('button')
  counterElem.textContent = 'Counter not initialized'

  const updateCounter = () => {
    counter++
    counterElem.textContent = `Counter is ${counter}`
    logs.append(`${name} - Counter updated to ${counter}`)
  }

  counterElem.addEventListener('click', () => updateCounter())
  containerElement.append(counterElem)
}
