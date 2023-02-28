import { createBrowserRouter } from "react-router-dom"
import News from "./routes/News"
import App from "./App"
import Premium from "./routes/Premium"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>error</>,
    children: [
      {
        path: "news",
        element: <News />,
      },
      {
        path: "premium",
        element: <Premium />,
      },
    ],
  },
])
