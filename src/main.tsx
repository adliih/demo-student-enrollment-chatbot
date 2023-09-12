import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ChatScreen from "./features/chat-bot/ChatScreen"
import Summary from "./features/summary/Summary"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "chat",
    element: <ChatScreen />,
  },
  {
    path: "summary",
    element: <Summary />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
