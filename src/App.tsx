import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import useRouteElements from "./pages/useRouteElements"

function App() {
  const [count, setCount] = useState(0)
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}

export default App
