/**
 * @url https://stackoverflow.com/questions/24641592/injecting-iframe-into-page-with-restrictive-content-security-policy
 */
export function createExternalFrame() {
    // Avoid recursive frame insertion...
    const extensionOrigin = "chrome-extension://" + chrome.runtime.id;
    if (!location.ancestorOrigins.contains(extensionOrigin)) {
        const iframe = document.createElement("iframe");
        // Must be declared at web_accessible_resources in manifest.json
        iframe.src = chrome.runtime.getURL("html/externalframe.html");

        // Some styles for a fancy sidebar
        iframe.style.cssText = "position:fixed;top:0;left:0;display:block;" +
            "width:300px;height:100%;z-index:1000;";
        document.body.appendChild(iframe);
    }
}

