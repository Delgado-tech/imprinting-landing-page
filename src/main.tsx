import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./app/home/Home.tsx";
import ImprintingCoinPage from "./app/imprinting_coin/ImprintingCoin.tsx";
import NeuroMapsPage from "./app/neuro_maps/NeuroMaps.tsx";
import NotFoundPage from "./app/not_found/NotFound.tsx";
import ProgramIAMPage from "./app/programa_eu_sou/ProgramIAM.tsx";
import "./globals.css";

const router = createBrowserRouter([
	{
		path: "*",
		element: <NotFoundPage />,
	},
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/eu-sou",
		element: <ProgramIAMPage />,
	},
	{
		path: "/imprinting-coin",
		element: <ImprintingCoinPage />,
	},
	{
		path: "/neuro-maps",
		element: <NeuroMapsPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <BreakpointsHighlight /> */}
		<RouterProvider router={router} />
	</React.StrictMode>,
);
