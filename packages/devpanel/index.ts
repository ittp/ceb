import { PORT_TYPE } from "../shared/port-type";

const dpport = chrome.runtime.connect({ name: PORT_TYPE.DEVPANEL });
dpport.postMessage({ msg: "Devpannel connected" });
