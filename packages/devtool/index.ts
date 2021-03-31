import { PORT_TYPE } from "../shared/port-type";

chrome.devtools.panels.create('TEMP-CHROME-EXT', 'icon16.png', './html/devpanel.html', function (_) {
    // CALLBACK
});

const dtport = chrome.runtime.connect({ name: PORT_TYPE.DEVTOOL });
dtport.postMessage({ msg: "Devtool connected" });
