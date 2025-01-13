import './style.css'
import {SystemLog} from './classes/system-log.singleton'
import {renderCounter} from './features/counter'
import {renderLogs} from './features/display-logs'

const logs = SystemLog.instance

renderCounter(document.querySelector('#content'), 'btn left')
renderCounter(document.querySelector('#content'), 'btn right')
renderLogs(document.querySelector('#log-container'))
renderLogs(document.querySelector('#log-container2'))

logs.append('Application stated')
