import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../app/home/Home";
import ImprintingCoinPage from "../../app/imprinting_coin/ImprintingCoin";
import MetaversoPage from "../../app/metaverso/Metaverso";
import NeuroMapsPage from "../../app/neuro_maps/NeuroMaps";
import NotFoundPage from "../../app/not_found/NotFound";
import ProgramIAMPage from "../../app/programa_eu_sou/ProgramIAM";

export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode={"wait"}>
			<Routes location={location} key={location.pathname}>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/eu-sou" element={<ProgramIAMPage />} />
				<Route path="/imprinting-coin" element={<ImprintingCoinPage />} />
				<Route path="/neuro-maps" element={<NeuroMapsPage />} />
				<Route path="/metaverso" element={<MetaversoPage />} />
			</Routes>
		</AnimatePresence>
	);
}
