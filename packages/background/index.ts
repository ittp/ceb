import { initBackground } from "./background";

initBackground();

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason === "install") {
        const manifest = chrome.runtime.getManifest();
        console.log("[BACKGROUND] Chrome extension is installed");
        localStorage.setItem("manifest", JSON.stringify(manifest)); // TODO: Save also datetime
    } else if (details.reason === "update") {
        const storedManifest = JSON.parse(localStorage.getItem("manifest")!) as chrome.runtime.Manifest;
        const storedVersion = storedManifest.version;

        const installedVersion = chrome.runtime.getManifest().version;
        // TODO: Compare versions
        console.log(`[BACKGROUND] Chrome extension is updated from ${storedVersion} to ${installedVersion}`);
    }
});

