import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./app/home/Home.tsx";
import NotFound from "./app/not_found/NotFound.tsx";
import ProgramIAMPage from "./app/programa_eu_sou/ProgramIAM.tsx";
import "./globals.css";

const router = createBrowserRouter([
	{
		path: "*",
		element: <NotFound />,
	},
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/eu-sou",
		element: <ProgramIAMPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <BreakpointsHighlight /> */}
		<RouterProvider router={router} />
	</React.StrictMode>,
);
