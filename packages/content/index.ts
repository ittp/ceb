import { injectCustomScript } from "./inject-script";
import { CUSTOM_EVENT } from "../shared/custom-events";
import { PORT_TYPE } from "../shared/port-type";
import { createExternalFrame } from "./external-frame";

// inject script

const injectableUrl = chrome.extension.getURL("./js/inject.js");
injectCustomScript(injectableUrl);
console.log("[CONTENT] Injected custom script");

document.addEventListener(CUSTOM_EVENT, () => {
    console.log("[CONTENT] Msg from injected script");
});

// messaging

const port = chrome.runtime.connect({ name: PORT_TYPE.CONTENT, includeTlsChannelId: true });
port.postMessage({ msg: "Content script connected" });

// create external frame for every tab
// createExternalFrame();
