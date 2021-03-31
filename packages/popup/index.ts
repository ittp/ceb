import { PORT_TYPE } from "../shared/port-type";

const popupport = chrome.runtime.connect({ name: PORT_TYPE.POPUP });
popupport.postMessage({ msg: "Popup page opened" });
