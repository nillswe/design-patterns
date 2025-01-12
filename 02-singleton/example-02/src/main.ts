import './style.css'
import {SystemLog} from "./classes/system-log"
import {renderCounter} from "./features/counter"
import {renderLogs} from "./features/display-logs"

const logs = SystemLog.instance
logs.append('Application stated')

renderCounter(document.querySelector('#content'))
renderLogs(document.querySelector("#log-container"))