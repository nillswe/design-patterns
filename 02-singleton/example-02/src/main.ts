import './style.css'
import {SystemLog} from './classes/system-log.singleton'
import {renderCounter} from './features/counter'
import {renderLogs} from './features/display-logs'
import {DatabaseConnection} from './classes/database-connection.singleton'

const logs = SystemLog.instance
const db = DatabaseConnection.instance

db.connect()

renderCounter(document.querySelector('#content'))
renderLogs(document.querySelector('#log-container'))

logs.append('Application stated')
