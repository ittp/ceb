/**
 * This script has full access to DOM on page, you can even listen on native DOM events
 * On other hand, it NO access to chrome.runtime. It can only communicate with CONTENT
 * using CUSTOM_EVENT. To pass information to background, use CONTENT as middleman
 */
import { CUSTOM_EVENT } from "../shared/custom-events";

setTimeout(function() {
    // on script ready
    document.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT, {}) // payload
    );
}, 0);
