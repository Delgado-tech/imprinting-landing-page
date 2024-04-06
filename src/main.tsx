import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./app/home/Home.tsx";
import ProgramIAMPage from "./app/programa_eu_sou/ProgramIAM.tsx";
import BreakpointsHighlight from "./components/tools/BreakpointsHighlight.tsx";
import "./globals.css";

const router = createBrowserRouter([
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
		<BreakpointsHighlight />
		<RouterProvider router={router} />
	</React.StrictMode>,
);
