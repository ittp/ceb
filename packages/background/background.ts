import { PORT_TYPE } from "../shared/port-type";

const ports: { [portType in PORT_TYPE]: any } = {
    CONTENT: [],
    DEVPANEL: [],
    DEVTOOL: [],
    OPTION: [],
    POPUP: []
};

export function initBackground() {
    chrome.runtime.onConnect.addListener(function (port) {
        console.log(`[APP] '${port.name.toUpperCase()}' connected`);
        console.log(JSON.stringify(port));
        ports[port.name as PORT_TYPE].push(port);

        port.onMessage.addListener(function (msg) {
           console.log(`[${port.name.toUpperCase()}]`, msg);
        });

        port.onDisconnect.addListener(() => {
            console.log(`[${port.name.toUpperCase()}] disconnected`);
        });
    });
}



