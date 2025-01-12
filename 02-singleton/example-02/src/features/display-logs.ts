import { SystemLog } from "../classes/system-log"

const logs = SystemLog.instance

export const renderLogs = (containerElement: HTMLElement | null) => {
  if (!containerElement) return


  setInterval(() => {

    const logsElem = document.createElement('ul')
    const logList = logs.list()

    logList.forEach(log => {
      const item = document.createElement('li')
      item.textContent = log

      logsElem.append(item)
    })

    containerElement.innerHTML = logsElem.getHTML()
  }, 1000)

}