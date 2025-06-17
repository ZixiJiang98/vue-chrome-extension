// This import css file is used to style the iframe that is injected into the page
import "./index.css"
import { name } from "~/package.json"

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from content-script")
