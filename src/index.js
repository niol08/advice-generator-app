import React from "react"
import * as ReactDOM from "react-dom/client"
import Body from "./Body"
import "./index.css"

const App = () => {
  return (
    <>
      <Body />
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
