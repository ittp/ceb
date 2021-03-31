import { CUSTOM_EVENT } from "../shared/custom-events";

export function injectCustomScript(url: string) {
    const injectScript = document.createElement("script");
    injectScript.src = url;
    injectScript.onload = function () {
        console.log("[INJECT] initialized, removing script tag");
        injectScript.remove();
        document.dispatchEvent(new Event(CUSTOM_EVENT));
    }

    const el = document.head || document.documentElement;
    if (el) {
      el.appendChild(injectScript);
    } else {
      throw new Error(
        "document.head or document.documentElement doesn't exists. You are probably not running inside browser"
      );
    }
}

