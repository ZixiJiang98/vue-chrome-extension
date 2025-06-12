// Sample code if using extensionpay.com
// import { extPay } from 'src/utils/payment/extPay'
// extPay.startBackground()

chrome.runtime.onInstalled.addListener(async (opt) => {
  // Check if reason is install or update. Eg: opt.reason === 'install' // If extension is installed.
  // opt.reason === 'update' // If extension is updated.
  
  // Commented out to prevent opening new tabs on install/update
  // if (opt.reason === "install") {
  //   chrome.tabs.create({
  //     active: true,
  //     // Open the setup page and append `?type=install` to the URL so frontend
  //     // can know if we need to show the install page or update page.
  //     url: chrome.runtime.getURL("src/ui/setup/index.html#/setup/install"),
  //   })

  //   return
  // }

  // if (opt.reason === "update") {
  //   chrome.tabs.create({
  //     active: true,
  //     url: chrome.runtime.getURL("src/ui/setup/index.html#/setup/update"),
  //   })

  //   return
  // }
})

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from background")

// Track popup state for floating button visibility
let isPopupOpen = false;

// Listen for popup open/close events
chrome.action.onClicked.addListener(() => {
  isPopupOpen = true;
  // Notify content scripts that popup is opened
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'popupOpened' });
    }
  });
});

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'isPopupOpen') {
    sendResponse({ isOpen: isPopupOpen });
    return true;
  }
  
  if (message.action === 'popupClosed') {
    isPopupOpen = false;
    // Notify all content scripts that popup is closed
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach(tab => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, { action: 'popupClosed' }).catch(() => {
            // Ignore errors for tabs that don't have content scripts
          });
        }
      });
    });
  }
});

// Reset popup state when extension starts
chrome.runtime.onStartup.addListener(() => {
  isPopupOpen = false;
});

export {}
