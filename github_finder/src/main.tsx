import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Home } from "./routes/Home"
import { App } from "./App"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
