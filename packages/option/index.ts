import { PORT_TYPE } from "../shared/port-type";

const optionport = chrome.runtime.connect({ name: PORT_TYPE.OPTION });
optionport.postMessage({ msg: "Option page opened" });
