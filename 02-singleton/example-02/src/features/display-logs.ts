import {SystemLog} from '../classes/system-log.singleton'

const logs = SystemLog.instance

const renderItems = (container: HTMLUListElement, log: string) => {
  const listElem = document.createElement('li')
  listElem.textContent = log
  container.appendChild(listElem)
}
export const renderLogs = (containerElement: HTMLElement | null) => {
  if (!containerElement) return

  const listContainerElem = document.createElement('ul')

  logs.subscribe(() => {
    const lastValue = logs.list[logs.list.length - 1]
    renderItems(listContainerElem, lastValue)
  })

  containerElement.append(listContainerElem)
}
