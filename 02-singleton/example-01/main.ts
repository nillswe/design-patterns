import {Singleton} from "./singleton"

import "./first-file"
import "./second-file"


const instance = Singleton.instance

instance.doAction()