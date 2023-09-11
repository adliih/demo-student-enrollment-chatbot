import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ChatScreen from "./features/chat-bot/ChatScreen"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "chat",
    element: <ChatScreen />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
