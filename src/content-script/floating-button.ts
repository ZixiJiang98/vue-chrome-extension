// Content script to inject floating button into web pages
import { createApp } from "vue"
import FloatingButtonApp from "../ui/floating-button/app.vue"
import "../ui/floating-button/index.css"

// Check if floating button should be shown
function shouldShowFloatingButton(): boolean {
  // Don't show on extension pages
  if (
    window.location.href.includes("chrome-extension://") ||
    window.location.href.includes("moz-extension://")
  ) {
    return false
  }

  // Don't show on certain domains if needed
  const excludedDomains = [
    "chrome://",
    "about:",
    "moz-extension://",
    "chrome-extension://",
  ]

  return !excludedDomains.some((domain) =>
    window.location.href.startsWith(domain),
  )
}

// Check if popup is currently open
function isPopupOpen(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.sendMessage({ action: "isPopupOpen" }, (response) => {
        resolve(response?.isOpen || false)
      })
    } else {
      resolve(false)
    }
  })
}

// Create and inject floating button
async function injectFloatingButton() {
  if (!shouldShowFloatingButton()) {
    return
  }

  // Check if popup is open
  const popupOpen = await isPopupOpen()
  if (popupOpen) {
    return // Don't show floating button if popup is open
  }

  // Check if floating button already exists
  if (document.getElementById("vibrant-floating-button")) {
    return
  }

  // Create container for the floating button
  const container = document.createElement("div")
  container.id = "vibrant-floating-button"
  container.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    pointer-events: none !important;
    z-index: 2147483647 !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  `

  // Inject into page
  document.body.appendChild(container)

  // Create Vue app and mount it
  const app = createApp(FloatingButtonApp)
  app.mount(container)

  console.log("Vibrant Wellness floating button injected")
}

// Remove floating button
function removeFloatingButton() {
  const existingButton = document.getElementById("vibrant-floating-button")
  if (existingButton) {
    existingButton.remove()
    console.log("Vibrant Wellness floating button removed")
  }
}

// Listen for messages from background script about popup state
if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "popupOpened") {
      removeFloatingButton()
    } else if (message.action === "popupClosed") {
      setTimeout(() => {
        injectFloatingButton()
      }, 500) // Small delay to ensure popup is fully closed
    }
  })
}

// Initialize floating button when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectFloatingButton)
} else {
  injectFloatingButton()
}

// Also inject when navigating in SPAs
let lastUrl = location.href
new MutationObserver(() => {
  const url = location.href
  if (url !== lastUrl) {
    lastUrl = url
    setTimeout(injectFloatingButton, 1000) // Delay for SPA navigation
  }
}).observe(document, { subtree: true, childList: true })
